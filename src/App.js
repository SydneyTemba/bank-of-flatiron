// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar'; // Corrected import path
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';

function App() {
  const goods = [
    {
      Date: "2024-12-01",
      Description: "Chicken",
      Category: "Food",
      Amount: "$25",
    },
    {
      Date: "2024-10-09",
      Description: "Shoes",
      Category: "Sneakers",
      Amount: "$25",
    },
    {
      Date: "2024-11-06",
      Description: "Playstation Pad",
      Category: "Accessory",
      Amount: "$78",
    },
    {
      Date: "2024-11-08",
      Description: "Off-white-shirt",
      Category: "Clothes",
      Amount: "$56",
    },
    
  ];

  const [transactions, setTransactions] = useState(goods);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Define the handleSearch function
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    // For example, filter the transactions based on the search term
    const filteredTransactions = goods.filter(transaction =>
      transaction.Description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTransactions(filteredTransactions);
  };

  return (
    <div>
      <Header />
      {/* Pass the handleSearch function as a prop to the SearchBar component */}
      <SearchBar handleSearch={handleSearch} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
