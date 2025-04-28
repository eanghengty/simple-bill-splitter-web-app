import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
      <h1 className="text-4xl font-bold text-pink-800">Bill Splitter App</h1>
      <p className="text-lg text-pink-500 mt-2">Let's split your bill easily 🎉</p>
      <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Split Bill
      </button>
    </div>
  );
}
