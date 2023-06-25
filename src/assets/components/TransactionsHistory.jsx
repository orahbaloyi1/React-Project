import React from "react";

const TransactionHistory = ({ transactions, handleEdit, handleDelete }) => {
  return (
    <div className="mt-10">
      <p className="font-bold text-center pt-8 py-2">Transaction History</p>
      <div className="table-container">
        <table className="mx-auto flex-col w-1/2 text-left">
          <thead className="">
            <tr className="">
              <th className="text-base text-white bg-sky-700 py-5 px-3">
                Description
              </th>
              <th className="text-base text-white bg-sky-700 py-5 px-3">
                Amount
              </th>
              <th className="text-base text-white bg-sky-700 py-5 px-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((t) => (
                <tr className="bg-white dark:border-gray py-5" key={t.id}>
                  <td className="py-5 px-3">{t.description}</td>
                  <td className="py-5 px-3 ">{t.amount}</td>
                  <td className="py-5 px-3">
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
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
