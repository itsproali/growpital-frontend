import React, { useState } from "react";
import { GiSplitCross } from "react-icons/gi";
import { BsBank } from "react-icons/bs";

const AddMoneyModal = ({ setOpenAddMoney, setTransModal }) => {
  const [amount, setAmount] = useState(5000);
  const handleAddMoney = async () => {
    await setOpenAddMoney(false);
    setTransModal(true);
  };
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 w-full h-screen bg-accent bg-opacity-30 backdrop-blur-lg z-50 flex items-center justify-center">
      <div className="bg-accent p-6 rounded-xl shadow border-4 border-gray-700">
        <div className="flex justify-end">
          <button
            onClick={() => setOpenAddMoney(false)}
            className="-mt-3 -mr-3"
          >
            <GiSplitCross />
          </button>
        </div>
        <h2 className="font-semibold">Add Money</h2>
        <div className="relative my-2">
          <label
            htmlFor="add-money"
            className="text-xs text-neutral absolute top-2 left-2"
          >
            Enter Amount to add
          </label>
          <input
            type="number"
            name="add-money"
            id="add-money"
            className="block w-full px-3 outline outline-1 outline-neutral bg-transparent rounded-lg pt-8 pb-2"
            value={amount}
            required
          />
        </div>
        <h3 className="gradient-text text-center mt-4">Popular</h3>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => setAmount(5000)}
            className={`${
              amount === 5000
                ? "btn-primary text-accent"
                : "bg-[#2A2D3C] text-secondary "
            } btn btn-sm border-none outline-none`}
          >
            ₹ 5,000
          </button>
          <button
            onClick={() => setAmount(10000)}
            className={`${
              amount === 10000
                ? "btn-primary text-accent"
                : "bg-[#2A2D3C] text-secondary "
            } btn btn-sm border-none outline-none`}
          >
            ₹ 10,000
          </button>
          <button
            onClick={() => setAmount(50000)}
            className={`${
              amount === 50000
                ? "btn-primary text-accent"
                : "bg-[#2A2D3C] text-secondary "
            } btn btn-sm border-none outline-none`}
          >
            ₹ 50,000
          </button>
          <button
            onClick={() => setAmount(100000)}
            className={`${
              amount === 100000
                ? "btn-primary text-accent"
                : "bg-[#2A2D3C] text-secondary "
            } btn btn-sm border-none outline-none`}
          >
            ₹ 100,000
          </button>
        </div>
        <div className="bg-secondary bg-opacity-40 rounded-lg p-4 my-4 flex gap-3">
          <BsBank className="text-5xl text-secondary" />
          <div className="">
            <h3 className="text-xl">Send Money To Bank</h3>
            <p className="text-neutral text-xs">RTGS/NEEFT/IMPS</p>
          </div>
        </div>
        <button className="btn w-full btn-primary" onClick={handleAddMoney}>
          Add Money
        </button>
      </div>
    </div>
  );
};

export default AddMoneyModal;
