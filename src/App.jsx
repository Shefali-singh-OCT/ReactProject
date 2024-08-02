import { useState } from 'react'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <div className="w-screen h-screen bg-black flex gap-5 flex-col items-center justify-start pt-7">
      <div
        className="w-9/12 h-5/6 border-4 border-stone-600"
        style={{ backgroundColor: color }}
      ></div>
      <div className=" rounded flex items-center justify-center gap-6 h-10 w-9/12">
        <button
          className="border-2 rounded-2xl text-center text-lime-700 p-2"
          onClick={() => setColor("rgb(77 124 15)")}
        >
          LIME
        </button>
        <button
          className="border-2 rounded-2xl text-center text-green-700 p-2"
          onClick={() => setColor("rgb(21 128 61)")}
        >
          GREEN
        </button>
        <button
          className="border-2 rounded-2xl text-center text-violet-700 p-2"
          onClick={() => setColor("rgb(109 40 217)")}
        >
          VIOLET
        </button>
        <button
          className="border-2 rounded-2xl text-center text-pink-700 p-2"
          onClick={() => setColor("rgb(190 24 93)")}
        >
          PINK
        </button>
        <button
          className="border-2 rounded-2xl text-center text-yellow-700 p-2"
          onClick={() => setColor("rgb(161 98 7)")}
        >
          YELLOW
        </button>
        <button
          className="border-2 rounded-2xl text-center text-orange-700 p-2"
          onClick={() => setColor("rgb(194 65 12)")}
        >
          ORANGE
        </button>
        <button
          className="border-2 rounded-2xl text-center text-slate-700 p-2"
          onClick={() => setColor("rgb(51 65 85)")}
        >
          SLATE
        </button>
        <button
          className="border-2 rounded-2xl text-center text-cyan-700 p-2"
          onClick={() => setColor("rgb(14 116 144)")}
        >
          CYAN
        </button>
        <button
          className="border-2 rounded-2xl text-center text-teal-700 p-2"
          onClick={() => setColor("rgb(15 118 110)")}
        >
          TEAL
        </button>
        <button
          className="border-2 rounded-2xl text-center text-fuchsia-700 p-2"
          onClick={() => setColor("rgb(162 28 175)")}
        >
          FUCHSIA
        </button>
      </div>
    </div>
  );
}

export default App
