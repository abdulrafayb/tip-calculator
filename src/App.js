import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipOne, setTipOne] = useState(0);
  const [tipTwo, setTipTwo] = useState(0);

  const tip = bill * ((tipOne + tipTwo) / 2 / 100);

  function handleReset() {
    setBill("");
    setTipOne(0);
    setTipTwo(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectFeedback tip={tipOne} onSelect={setTipOne}>
        How did you like the service
      </SelectFeedback>
      <SelectFeedback tip={tipTwo} onSelect={setTipTwo}>
        How did your friend like the service
      </SelectFeedback>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Amount"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}

function SelectFeedback({ tip, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSelect(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  /* tipOne = bill * (tipOne / 100);
  tipTwo = bill * (tipTwo / 100);
  const averageTip = (tipOne + tipTwo) / 2; */

  return (
    bill > 0 && (
      <div>
        <h3>
          You pay {bill + tip}$ ({bill}$ + {Math.round(tip)}$ tip)
        </h3>
      </div>
    )
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
