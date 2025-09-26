
import { useState } from "react";
import { useBudgetStore } from "../store/budgetStore";

export default function IncomeInput() {
  const setIncome = useBudgetStore((state) => state.setIncome);
  const income = useBudgetStore((state) => state.income);
  const [value, setValue] = useState(income.toString());

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-4 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800">💰 Monthly Income</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your monthly income"
        className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={() => setIncome(Number(value))}
        className="bg-blue-600 text-white p-3 rounded-xl font-medium hover:bg-blue-700 active:scale-95 transition"
      >
        Save Income
      </button>
    </div>
  );
}
