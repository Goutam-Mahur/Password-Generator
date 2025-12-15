import { useCallback, useEffect, useState } from "react";

export function usePasswordGenerator() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(true);
  const [character, setCharacter] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [password, setPassword] = useState("test");

  const generate = useCallback(() => {
    let chars = "";
    if (lowerCase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (upperCase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (character) chars += "{}[]()!@#$%^&*_+-/";
    if (number) chars += "0123456789";

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pass);
  }, [length, number, character, lowerCase, upperCase]);

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
