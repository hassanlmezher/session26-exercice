import { useBudgetStore } from "../store/budgetStore";

export default function Report() {
  const income = useBudgetStore((state) => state.income);
  const expenses = useBudgetStore((state) => state.expenses);
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">📊 Report</h2>
      <div className="space-y-2">
        <p className="text-gray-700 text-lg">
          Income: <span className="font-semibold text-blue-600">${income}</span>
        </p>
        <p className="text-gray-700 text-lg">
          Total Expenses:{" "}
          <span className="font-semibold text-red-600">${totalExpenses}</span>
        </p>
        <p
          className={`text-lg font-bold ${
            income - totalExpenses < 0 ? "text-red-600" : "text-green-600"
          }`}
        >
          Remaining: ${income - totalExpenses}
        </p>
      </div>
      <h3 className="text-md font-semibold mt-4 text-gray-800">
        Recent Expenses
      </h3>
      <ul className="mt-2 space-y-2">
        {expenses.length === 0 ? (
          <li className="text-gray-400 text-sm">No expenses added yet.</li>
        ) : (
          expenses.map((exp) => (
            <li
              key={exp.id}
              className="flex flex-col md:flex-row md:justify-between p-3 bg-gray-50 rounded-lg text-gray-700"
            >
              <div>
                <span className="font-medium">{exp.description}</span>{" "}
                <span className="text-xs text-gray-500">({exp.date})</span>
              </div>
              <span className="font-semibold">${exp.amount}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
