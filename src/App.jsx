import { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [editId, setEditId] = useState(null);

  const addTransaction = (e) => {
    e.preventDefault();
    if (editId) {
      const newTransaction = transactions.map((t) =>
        t.id === editId ? { id: editId, description, amount } : t
      );
      setTransactions(newTransaction);
      setEditId(null);
    } else {
      setTransactions([
        ...transactions,
        { id: Date.now(), description, amount },
      ]);
    }
    setDescription("");
    setAmount("");
  };

  const handleEdit = (t) => {
    setEditId(t.id);
    setDescription(t.description);
    setAmount(t.amount);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };
  return (
    <>
      <div className="py-5">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo flex gap-x-1">
            <a className="flex align-middle">
              <span className="material-symbols-outlined text-6xl align-middle">
                paid
              </span>
              <h1 className="text-4xl font-bold">CoinTracker</h1>
            </a>
          </div>
          <div className="">
            <ul className="flex gap-x-10 text-xl font-bold">
              <li>
                <a href="" className="">
                  About us
                </a>
              </li>
              <li>
                <a href="" className="">
                  Transaction
                </a>
              </li>
              <li>
                <a href="" className="">
                  Report
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section className="hero-section py-10 bg-gray-200">
          <div className="container mx-auto px-4 bg-gray-200 ">
            <h1 className="text-2xl font-bold text-center">
              Welcome to CoinTracker!
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="border">
                <p className="font-bold">Add Transaction </p>
                <form onSubmit={addTransaction} className="flex flex-col gap-2">
                  <input
                    className="border rounded-xl py-1.5 text-center"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                  <input
                    className="border rounded-xl py-1.5 text-center"
                    type="number"
                    placeholder="Enter Amount"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                  />
                  <button
                    className="border bg-blue-300 rounded-xl py-1.5"
                    type="submit"
                  >
                    Add transaction
                  </button>
                </form>
              </div>
              <div className="border">
                <p className="font-bold">budget</p>
              </div>
            </div>
            <div className="mt-10">
              <p className="">Transaction History</p>
              <div className="table-container">
                <table className=" table-auto flex-col w-full text-left text-gray-600 ">
                  <thead className="">
                    <tr className="">
                      <th className="text-base bg-blue-100 py-5 px-3">
                        Description
                      </th>
                      <th className="text-base bg-blue-100 py-5 px-3">
                        Amount
                      </th>
                      <th className="text-base bg-blue-100 py-5 px-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((t) => (
                      <tr className="bg-white dark:border-gray py-5" key={t.id}>
                        <td className="py-5 px-3">{t.description}</td>
                        <td className="py-5 px-3 ">{t.amount}</td>
                        <td>
                          <button
                            className="border bg-pink-500 py-1.5 px-4"
                            onClick={(e) => handleEdit(t)}
                          >
                            Edit
                          </button>
                          <button
                            className="border bg-purple-500 py-1.5 px-4"
                            onClick={(e) => handleDelete(t.id)}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
