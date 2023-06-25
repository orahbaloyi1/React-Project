import { useState } from "react";
import AddTransaction from "./AddTransaction";
import TransactionsHistory from "./TransactionsHistory";

const HeroSection = () => {
  const [transactions, setTransactions] = useState([]);
  const [editId, setEditId] = useState(null);

  const addTransaction = (newTransaction) => {
    if (editId) {
      const updatedTransactions = transactions.map((t) =>
        t.id === editId ? { ...newTransaction, id: editId } : t
      );
      setTransactions(updatedTransactions);
      setEditId(null);
    } else {
      setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
    }
  };

  const handleEdit = (t) => {
    setEditId(transactions.id);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <section className="pt-14 bg-gray-200 h-screen ">
      <div className="container mx-auto px-4 bg-gray-200 ">
        <h1 className="text-4xl text-blue-700 font-bold text-center pt-6">
          Welcome to CoinTracker!
        </h1>
        <div className="grid grid-cols-1 w-50 gap-4">
          <AddTransaction addTransaction={addTransaction} />
        </div>
        <div>
          <TransactionsHistory
            transactions={transactions}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
