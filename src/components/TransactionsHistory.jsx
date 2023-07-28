import React from "react";

const TransactionHistory = ({ transactions, handleEdit, handleDelete }) => {
  return (
    <div className="container mx-auto mt-20 ">
      <div className="border rounded-xl bg-white h-80 ">
        <p className="font-bold text-2xl px-4 pt-8">Transaction History</p>
        <div className="">
          {transactions &&
            transactions.map((t) => (
              <div
                className="bg-white border-b-2 dark:border-gray py-2"
                key={t.id}
              >
                <p className="px-4">
                  Description:<span className="ml-2">{t.description}</span>
                </p>
                <p className="px-4">
                  Amount:
                  <span className="ml-2">R{t.amount}</span>
                </p>
                <div className="py-2 justify-right">
                  <button
                    className="border text-white rounded-xl bg-sky-700 hover:bg-blue-700 py-2 px-4 mx-3"
                    onClick={() => handleEdit(t)}
                  >
                    Edit
                  </button>
                  <button
                    className="border text-white rounded-xl bg-sky-700 hover:bg-blue-700 py-2 px-4"
                    onClick={() => handleDelete(t.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
