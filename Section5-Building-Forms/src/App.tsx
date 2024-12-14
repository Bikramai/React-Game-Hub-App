import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Car", amount: 500, category: "CarLoan" },
    { id: 2, description: "House", amount: 2000, category: "HouseLoan" },
    { id: 3, description: "Grocery", amount: 800, category: "MonthlyGrocery" },
    { id: 4, description: "Gas", amount: 300, category: "CarGas" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
