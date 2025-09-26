import { create } from "zustand";

export type Expense = {
  id: string;
  description: string;
  amount: number;
  date: string;
};

type BudgetState = {
  income: number;
  expenses: Expense[];
  setIncome: (value: number) => void;
  addExpense: (expense: Expense) => void;
};

export const useBudgetStore = create<BudgetState>((set) => ({
  income: 0,
  expenses: [],
  setIncome: (value) => set({ income: value }),
  addExpense: (expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),
}));
