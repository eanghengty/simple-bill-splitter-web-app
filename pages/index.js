import { useState } from "react";
import { ReceiptText,Users,DollarSign } from "lucide-react";
export default function Home(){
  const [bill,setBill]=useState('');
  const [people, setPeople]=useState('');
  const [tip,setTip]=useState('');
  const [result,setResult]=useState(null);

  const handleSplit =()=>{
    const total=parseFloat(bill)+(parseFloat(tip)||0);
    const split=total/parseInt(people);
    setResult(split.toFixed(2));
  };

  return(

    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-4">
      <h1 className="text-4xl font-bold text-pink-800 mb-6">Easy Bill Splitter - Eang Hengty</h1>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <div className="flex items-center gap-2 border rounded p-3 bg-white">
          <ReceiptText size={24} className="text-pink-400"></ReceiptText>
          <input
        type="number"
        placeholder="Enter total bill amount"
        value={bill}
        onChange={(e)=>setBill(e.target.value)}
        className="flex-1 outline-none"
        ></input>
        </div>
        

      <div className="flex items-center gap-2 border rounded p-3 bg-white">
        <Users size={24} className="text-pink-400"></Users>
        <input
      type="number"
      placeholder="Enter number of people"
      value={[people]}
      onChange={(e)=>setPeople(e.target.value)}
      className="flex-1 outline-none"
      ></input>
      </div>
      
      <div className="flex items-center gap-2 border rounded p-3 bg-white">
        <DollarSign size={24} className="text-pink-400"></DollarSign>
        <input
      type = "number"
      placeholder="Enter the tip amount (optional)"
      value={[tip]}
      onChange={(e)=>setTip(e.target.value)}
      className="flex-1 outline-none"
      ></input>
      </div>
      

      <button onClick={handleSplit} className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
        Split Bill
      </button>

      {result && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold text-green-700">Each Person pays: ${result}</p>
        </div>
      )}

      </div>
    </div>

    
  )

}