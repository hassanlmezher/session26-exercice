import { useState } from "react";
import { useBudgetStore } from "../store/budgetStore";

export default function ExpenseForm() {
  const addExpense = useBudgetStore((state) => state.addExpense);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = () => {
    if (!description || !amount) return;
    addExpense({
      id: Date.now().toString(),
      description,
      amount: Number(amount),
      date: new Date().toLocaleString(),
    });
    setDescription("");
    setAmount("");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-4 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800">➕ Add Expense</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Expense description"
        className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        onClick={handleAdd}
        className="bg-green-600 text-white p-3 rounded-xl font-medium hover:bg-green-700 active:scale-95 transition"
      >
        Add Expense
      </button>
    </div>
  );
}
