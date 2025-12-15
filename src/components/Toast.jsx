export default function Toast({ visible }) {
  if (!visible) return null;

  return (
    <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800/70 text-white text-xs p-2 shadow-sm animate-fade-in">
      Copied to clipboard
    </div>
  );
}
