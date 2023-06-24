import "./App.css";

function navMenu() {
  //const [description, setDescription] = useState();
  //const [amount, SetAmount] = useState();
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
                <form className="flex flex-col gap-2">
                  <input
                    className="border rounded-xl py-1.5 text-center"
                    type="text"
                    placeholder="Description"
                  />
                  <input
                    className="border rounded-xl py-1.5 text-center"
                    type="number"
                    placeholder="Enter Amount"
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
                <p className="font-bold">Budget</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default navMenu;
