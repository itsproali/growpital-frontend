import React from "react";
import { RiWallet3Fill } from "react-icons/ri";
import { BiLinkExternal, BiErrorAlt } from "react-icons/bi";
import transactions from "../../../assets/data/transactions.json";
import AddMoneyModal from "./AddMoneyModal";
import WithdrawModal from "./WithdrawModal";
import TransactionModal from "./TransactionModal";

const Wallet = ({
  openAddMoney,
  setOpenAddMoney,
  openWithdraw,
  setOpenWithdraw,
  transModal,
  setTransModal,
}) => {
  return (
    <>
      <div className="my-8 mx-auto w-full md:w-5/6">
        {/* Bank Card */}
        <div className="bg-card bg-content bg-no-repeat w-[360px] h-[210px] py-8 px-6 ">
          <div className="flex items-center justify-between">
            <div>
              <p>Your Balance</p>
              <h2 className="text-3xl font-bold">$4210.00</h2>
            </div>
            <div>
              <RiWallet3Fill className="text-6xl" />
            </div>
          </div>
          <div className="flex items-center-justify-center gap-3 mt-12">
            <button
              className="btn btn-secondary py-2 px-8"
              onClick={() => setOpenAddMoney(true)}
            >
              Add Money
            </button>
            <button
              className="btn btn-accent py-2 px-8"
              onClick={() => setOpenWithdraw(true)}
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* All Transactions */}
        <div className="mt-8 mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Transactions</h2>
            <button className="text-secondary hover:underline">View All</button>
          </div>

          {/* Single Transaction */}
          {transactions?.map((transaction) => {
            const { id, name, date, time, cost, status } = transaction;
            return (
              <div
                key={id}
                className="flex items-center justify-between my-3 px-3 py-1 cursor-pointer rounded hover:bg-opacity-50 hover:bg-accent hover:shadow duration-300"
                title={status}
              >
                <div className="flex items-center gap-3">
                  {status !== "failed" ? (
                    <BiLinkExternal
                      className={`${
                        status === "in" && "rotate-180"
                      } text-3xl font-semibold text-secondary`}
                    />
                  ) : (
                    <BiErrorAlt className="text-3xl font-semibold text-error" />
                  )}
                  <div>
                    <h3>{name}</h3>
                    <p className="text-neutral text-xs">
                      <span>{date}</span> <span>{time}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h3
                    className={`${status === "in" && "text-success"} ${
                      status === "failed" && "text-error"
                    }`}
                  >
                    <span>
                      {status === "in" && "+"}
                      {status === "out" && "-"}
                    </span>
                    <span>{"₹ " + cost}</span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {openAddMoney && (
        <AddMoneyModal
          setOpenAddMoney={setOpenAddMoney}
          setTransModal={setTransModal}
        />
      )}
      {openWithdraw && <WithdrawModal setOpenWithdraw={setOpenWithdraw} />}
      {transModal && <TransactionModal setTransModal={setTransModal} />}
    </>
  );
};

export default Wallet;
