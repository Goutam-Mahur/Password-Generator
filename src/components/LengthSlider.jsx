export default function LengthSlider({ length, setLength }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-base text-zinc-600 dark:text-zinc-400">
        <span>Length</span>
        <span className="relative top-[1px]">{length}</span>
      </div>
      <input
        type="range"
        min={0}
        max={20}
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="w-full accent-zinc-600 dark:accent-zinc-300"
      />
    </div>
  );
}
