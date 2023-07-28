import { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ description, amount });
    setDescription("");
    setAmount("");
  };

  return (
    <div className="border rounded-xl bg-white mt-10 h-full">
      <p className="font-bold text-2xl pt-8 px-6">Add Transaction </p>
      <form onSubmit={handleSubmit} className="flex flex-col mt-4">
        <input
          className="border rounded-xl py-3 mt-6 mx-6 px-4 text-center drop-shadow-md "
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          className="border rounded-xl py-3 mt-6 mx-6 px-4 drop-shadow-md text-center"
          type="number"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <div className="flex justify-center mt-6">
          <button
            className="border font-bold bg-sky-700 rounded-xl text-white ml-6 py-3 px-6 drop-shadow-md  hover:bg-blue-700 "
            type="submit"
          >
            Add transaction
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTransaction;
