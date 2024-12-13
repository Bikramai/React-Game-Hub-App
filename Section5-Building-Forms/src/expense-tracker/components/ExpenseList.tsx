import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const ExpenseList = () => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default ExpenseList;
