import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false);
  const [specialCharacterAllowed, setSpecialCharactorAllowed] = useState(false);
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumbersAllowed) str += "0123456789";
    if (specialCharacterAllowed) str += "~`@#$%^&*<>?";
    for (let i = 0; i < length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length));
      pass += char;
    }
    setPassword(pass);
  }, [length, isNumbersAllowed, specialCharacterAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumbersAllowed, specialCharacterAllowed, passwordGenerator]);

  const handelCopy = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password).then(()=>{
      alert(`Password copied to clipboard! `)
  }).catch((error)=>{
    alert("Failed to copy password: ", error)
  })
  },[password])

  return (
    <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Password Generator</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Password"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
          />
          <button
            onClick={handelCopy}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full"
          >
            Copy
          </button>
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Length: {length}</label>
          <input
            type="range"
            name="passwordRange"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="number"
            checked={isNumbersAllowed}
            onChange={() => setIsNumbersAllowed((prev) => !prev)}
            className="mr-2 accent-blue-500"
          />
          <label htmlFor="number" className="text-gray-300">Numbers</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="character"
            checked={specialCharacterAllowed}
            onChange={() => setSpecialCharactorAllowed((prev) => !prev)}
            className="mr-2 accent-blue-500"
          />
          <label htmlFor="character" className="text-gray-300">Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
