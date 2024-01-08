import { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [result, setResult] = useState("");

  useEffect(() => {
    async function convert() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${baseCurrency}&to=${targetCurrency}`
      );
      const data = await res.json();
      setResult(data.rates[targetCurrency]);
    }
    convert();
  }, [amount, baseCurrency, targetCurrency]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(Number(e.target.value))}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(Number(e.target.value))}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {result} {targetCurrency}
      </p>
    </div>
  );
}
