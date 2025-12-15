import { useState } from "react";
import Toast from "./Toast";

export default function PasswordOutput({ password }) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setShowToast(true);

    setTimeout(() => {
      setCopied(false);
      setShowToast(false);
    }, 700);
  };

  return (
    <div className="relative flex gap-2 items-center">
      <input
        readOnly
        value={password}
        className="
          flex-1
          rounded-lg
          border border-zinc-300 dark:border-zinc-600
          bg-zinc-100/70 dark:bg-zinc-700/70
          px-3
          py-[0.45rem]
          text-base
          text-zinc-900 dark:text-zinc-100
          focus:outline-none
          shadow-inner shadow-black/5 dark:shadow-black/20
        "
      />

      <div className="relative">
        <Toast visible={showToast} />
        <button
          onClick={copy}
          disabled={copied}
          className="
            rounded-lg
            px-4
            py-[0.45rem]
            text-sm
            bg-zinc-800 dark:bg-zinc-200
            text-white dark:text-zinc-900
            hover:bg-zinc-700 dark:hover:bg-zinc-300
            transition
          "
        >
          {copied ? "✓" : "Copy"}
        </button>
      </div>
    </div>
  );
}
