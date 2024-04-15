import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 50);
  };

  return (
    <div className="grid min-h-screen place-content-center bg-[#027333]">
      <div className="flex justify-center gap-6">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-28" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-28" alt="React logo" />
        </a>
      </div>
      <h1 className="pt-10 text-center text-5xl font-medium text-white">
        Vite + React
      </h1>
      <div className="flex flex-col items-center justify-center pt-20">
        <button
          onClick={handleClick}
          className={`rounded-lg px-3 py-2 text-white ${
            clicked ? 'bg-[#012340]' : 'bg-[#025959]'
          }`}
        >
          count is {count}
        </button>
        <p className="pt-4 text-sm text-white">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="pt-10 text-sm text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;