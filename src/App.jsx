import React, { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("test");
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [darkmode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const passwordRef = useRef(null);

  const handleToggle = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "";
    if (lowerCase) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }

    if (upperCase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (character) {
      str += "{}[]()!@#$%^&*_+-/\\~`";
    }

    if (number) {
      str += "0123456789";
    }

    console.log(str + "\n");

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    if (pass === "" && length !== 0) {
      pass = "nothing selected";
    }

    setPassword(pass);
  }, [length, number, character, setPassword, lowerCase, upperCase]);

  useEffect(() => {
    passwordgenerator();
  }, [length, number, character, passwordgenerator, lowerCase, upperCase]);

  const copyToClipBoard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-start items-center dark:bg-black">
        <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
          <div className="text-2xl sm:text-3xl md:text-4xl pb-8  font-medium text-gray-900 dark:text-slate-200 text-center">
            Password Generator
          </div>
          <div className="w-full max-w-md flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <input
                type="text"
                readOnly
                className="flex-1 border text-gray-900 text-base sm:text-lg rounded-lg dark:bg-gray-50 focus:ring-blue-800 focus:border-blue-600 dark:bg-transparent focus:outline-none p-2  dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600 text-center"
                ref={passwordRef}
                value={password}
                placeholder="password"
              />
              <button
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base sm:text-lg px-4 sm:px-5 py-2.5 text-center"
                onClick={copyToClipBoard}
              >
                copy
              </button>
            </div>

            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-2">
                <input
                  type="range"
                  id="slider"
                  min={0}
                  max={20}
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full"
                />
                <label
                  htmlFor="slider"
                  className="text-gray-500 dark:text-neutral-400 flex justify-between text-sm sm:text-base pe-2"
                >
                  length <span>{length}</span>
                </label>
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex flex-row-reverse justify-between text-sm sm:text-base">
                  <input
                    type="checkbox"
                    id="num"
                    defaultChecked={number}
                    onChange={() => setNumber((prev) => !prev)}
                    className="sr-only peer"
                  />
                  <div className="relative w-10 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="mt-1 text-gray-500 dark:text-neutral-400">
                    Include Numbers
                  </span>
                </label>

                <label className="flex flex-row-reverse justify-between text-sm sm:text-base">
                  <input
                    type="checkbox"
                    id="lowercase"
                    defaultChecked={lowerCase}
                    onChange={() => setLowerCase((prev) => !prev)}
                    className="sr-only peer"
                  />
                  <div className="relative w-10 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="mt-1 text-gray-500 dark:text-neutral-400">
                    Include LowerCase
                  </span>
                </label>

                <label className="flex flex-row-reverse justify-between text-sm sm:text-base">
                  <input
                    type="checkbox"
                    id="uppercase"
                    defaultChecked={upperCase}
                    onChange={() => setUpperCase((prev) => !prev)}
                    className="sr-only peer"
                  />
                  <div className="relative w-10 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="mt-1 text-gray-500 dark:text-neutral-400">
                    Include UpperCase
                  </span>
                </label>

                <label className="flex flex-row-reverse justify-between text-sm sm:text-base">
                  <input
                    type="checkbox"
                    id="special-chars"
                    defaultChecked={character}
                    onChange={() => setCharacter((prev) => !prev)}
                    className="sr-only peer"
                  />
                  <div className="relative w-10 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="mt-1 text-gray-500 dark:text-neutral-400">
                    Include Special Characters
                  </span>
                </label>

                <label className="flex flex-row-reverse justify-between text-sm sm:text-base">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    onClick={handleToggle}
                    defaultChecked={darkmode}
                  />
                  <div className="relative w-10 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="mt-1 text-gray-500 dark:text-neutral-400">
                    Dark Mode
                  </span>
                </label>

                <button
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base sm:text-lg px-4 sm:px-5 py-2.5 text-center"
                  onClick={passwordgenerator}
                >
                  Generate Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
