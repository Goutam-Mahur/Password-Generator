export default function Toggle({ label, value, onToggle }) {
  return (
    <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
      <span>{label}</span>
      <button
        onClick={onToggle}
        className={`relative w-9 h-5 rounded-full transition-colors ${
          value
            ? "bg-zinc-600 dark:bg-zinc-300"
            : "bg-zinc-300 dark:bg-zinc-600"
        }`}
      >
        <span
          className={`absolute top-[2px] left-[2px] h-4 w-4 rounded-full bg-white dark:bg-zinc-900 transition-transform ${
            value ? "translate-x-4" : ""
          }`}
        />
      </button>
    </div>
  );
}
