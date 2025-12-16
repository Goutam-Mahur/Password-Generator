import { useCallback, useEffect, useState } from "react";

export function usePasswordGenerator() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(true);
  const [character, setCharacter] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [password, setPassword] = useState("test");

  const generate = useCallback(() => {
    const pools = [];

    if (lowerCase) pools.push("abcdefghijklmnopqrstuvwxyz");
    if (upperCase) pools.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (number) pools.push("0123456789");
    if (character) pools.push("{}[]()!@#$%^&*_+-/");

    if (!pools.length || length <= 0) {
      setPassword("");
      return;
    }

    const res = [];

    // shuffling the pools to ensure that in case len < options selected we get random
    for (let i = pools.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pools[i], pools[j]] = [pools[j], pools[i]];
    }

    // compulsory inclusion (as much as length allows)
    for (let i = 0; i < pools.length && res.length < length; i++) {
      const p = pools[i];
      res.push(p[Math.floor(Math.random() * p.length)]);
    }

    // merged pool
    const all = pools.join("");

    // fill remaining length
    while (res.length < length) {
      res.push(all[Math.floor(Math.random() * all.length)]);
    }

    // shuffle
    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [res[i], res[j]] = [res[j], res[i]];
    }

    setPassword(res.join(""));
  }, [length, lowerCase, upperCase, number, character]);

  useEffect(() => {
    generate();
  }, [generate]);

  return {
    length,
    setLength,
    number,
    setNumber,
    character,
    setCharacter,
    upperCase,
    setUpperCase,
    lowerCase,
    setLowerCase,
    password,
    generate,
  };
}
