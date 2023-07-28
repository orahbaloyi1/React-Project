import { useState } from "react";
import AddTransaction from "./AddTransaction";
import TransactionsHistory from "./TransactionsHistory";

const HeroDashboard = () => {
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

  const getTotalAmount = () => {
    return transactions.reduce(
      (total, transaction) => total + parseFloat(transaction.amount),
      0
    );
  };

  return (
    <section className="py-8 h-screen bg-gray-100 ">
      <div className="container mx-auto px-4  ">
        <h1 className="text-4xl text-gray-700 font-bold text-center pt-6">
          Welcome to CoinTracker!
        </h1>
        <div className="grid grid-cols-2 w-50 gap-4">
          <div>
            <AddTransaction addTransaction={addTransaction} />
          </div>
          <div className="flex justify-center items-center border rounded-xl bg-white mt-10 h-full ">
            <p className="font-bold text-2xl text-center">
              Total Amount:
              <br />{" "}
              <span className="text-sky-700">
                R{getTotalAmount().toFixed(2)}
              </span>
            </p>
          </div>
        </div>
        <div className="">
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

export default HeroDashboard;
