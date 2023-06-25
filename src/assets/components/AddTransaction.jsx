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
    <div className="border">
      <p className="font-bold text-center pt-8 py-2">Add Transaction </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border rounded-xl py-2  w-1/3 mx-auto text-center"
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          className="border rounded-xl py-2 mx-auto  w-1/3 text-center"
          type="number"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button
          className="border bg-sky-700 rounded-xl text-white mx-auto py-2 w-1/3 text-center hover:bg-sky-700 "
          type="submit"
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};
export default AddTransaction;
