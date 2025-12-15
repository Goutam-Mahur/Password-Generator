import Header from "./components/Header.";
import PasswordOutput from "./components/passwordOutput";
import LengthSlider from "./components/LengthSlider";
import Toggle from "./components/Toggle";
import { useDarkMode } from "./hooks/useDarkMode";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";

function App() {
  const { darkmode, toggle } = useDarkMode();
  const {
    length,
    setLength,
    number,
    setNumber,
    lowerCase,
    setLowerCase,
    upperCase,
    setUpperCase,
    character,
    setCharacter,
    password,
    generate,
  } = usePasswordGenerator();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ebecef] dark:bg-zinc-900 px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-[#f3f4f6] dark:bg-zinc-800/70 backdrop-blur-sm shadow-sm px-6 py-7 space-y-7">
        <Header darkmode={darkmode} onToggle={toggle} />
        <PasswordOutput password={password} />
        <LengthSlider length={length} setLength={setLength} />

        <div className="space-y-4 text-base">
          <Toggle
            label="Include Numbers"
            value={number}
            onToggle={() => setNumber((v) => !v)}
          />
          <Toggle
            label="Include Lowercase"
            value={lowerCase}
            onToggle={() => setLowerCase((v) => !v)}
          />
          <Toggle
            label="Include Uppercase"
            value={upperCase}
            onToggle={() => setUpperCase((v) => !v)}
          />
          <Toggle
            label="Include Special Characters"
            value={character}
            onToggle={() => setCharacter((v) => !v)}
          />
        </div>

        <button
          onClick={generate}
          className="w-full rounded-lg py-2 text-sm bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
