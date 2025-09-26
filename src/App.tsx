import IncomeInput from "./components/IncomeInput";
import ExpenseForm from "./components/ExpenseForm";
import Report from "./components/Report";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-8 p-6">
      <h1 className="text-3xl font-bold text-gray-800 drop-shadow">
        💸 Budget Tracker
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <IncomeInput />
        <ExpenseForm />
        <Report />
      </div>
    </div>
  );
}
