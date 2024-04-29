import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    Date: "",
    Description: "",
    Category: "",
    Amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({
      ...newTransaction,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(newTransaction);
    setNewTransaction({
      Date: "",
      Description: "",
      Category: "",
      Amount: "",
    });
  };

  return (
    <div className="row border">
      <div className="col-3">
        <input type="Date" name="Date" value={newTransaction.Date} onChange={handleInputChange}/>
      </div>
      <div className="col-3">
        <input type="text" placeholder="Description" name="Description" value={newTransaction.Description} onChange={handleInputChange}/>
      </div>
      <div className="col-3">
        <input type="text" placeholder="Category" name="Category" value={newTransaction.Category} onChange={handleInputChange}/>
      </div>
      <div className="col-3">
        <input type="text" placeholder="Amount" name="Amount" value={newTransaction.Amount} onChange={handleInputChange}/>
      </div>
      <div className="col-md-12 mt-2">
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Transaction </button>
      </div>
    </div>
  );
}

export default TransactionForm;
