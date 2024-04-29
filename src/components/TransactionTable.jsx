
import React from 'react';

function TransactionTable({ transactions }) {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.Date}</td>
              <td>{transaction.Description}</td>
              <td>{transaction.Category}</td>
              <td>{transaction.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
