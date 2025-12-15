import { SunIcon } from "../svg/SunIcon";
import { MoonIcon } from "../svg/MoonIcon";

export default function Header({ darkmode, onToggle }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center">
      <div />

      <h1 className="whitespace-nowrap text-xl font-medium text-center text-zinc-900 dark:text-zinc-100">
        Password Generator
      </h1>

      <button
        onClick={onToggle}
        aria-label="Toggle theme"
        className="justify-self-end inline-flex items-center justify-center w-8 h-8 translate-y-[1px] -mr-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition focus-visible:outline-none focus-visible:ring-1"
      >
        {darkmode ? (
          <SunIcon className="w-4 h-4" />
        ) : (
          <MoonIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
