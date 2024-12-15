import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Car", amount: 500, category: "CarLoan" },
    { id: 2, description: "House", amount: 2000, category: "HouseLoan" },
    { id: 3, description: "Grocery", amount: 800, category: "MonthlyGrocery" },
    { id: 4, description: "Gas", amount: 300, category: "CarGas" },
    {
      id: 5,
      description: "Electric & Gas",
      amount: 300,
      category: "Utilities",
    },
    {
      id: 6,
      description: "Water & sewers",
      amount: 300,
      category: "Utilities",
    },
    {
      id: 7,
      description: "Waste Recycle",
      amount: 60,
      category: "Waste Management",
    },
  ]);

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => console.log(category)} />
      </div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
