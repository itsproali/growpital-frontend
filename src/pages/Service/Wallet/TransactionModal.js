import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaRegCheckCircle, FaRegCopy } from "react-icons/fa";
import { GiSplitCross } from "react-icons/gi";
import { RiWallet3Fill } from "react-icons/ri";
import transactionDetails from "../../../assets/data/transactionDetails.json";

const TransactionModal = ({ setTransModal }) => {
  const {
    transactionAmount,
    transactionDate,
    paymentType,
    senderDetails,
    receiverDetails,
    paymentMethod,
    transactionId,
  } = transactionDetails;
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 w-full h-screen bg-accent bg-opacity-30 backdrop-blur-lg z-50 flex items-center justify-center">
      <div className="bg-accent p-6 rounded-xl shadow w-full mx-2 md:mx-0 md:w-[400px]">
        <div className="flex justify-end">
          <button onClick={() => setTransModal(false)} className="-mt-3 -mr-3">
            <GiSplitCross />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="text-neutral text-xs">
            <p>Money Added To Wallet</p>
            <p>{paymentType.Name}</p>
          </div>
          <BiLinkExternal className="text-secondary text-4xl rotate-180" />
        </div>
        <h2 className="text-3xl font-semibold mb-2">₹ {transactionAmount}</h2>
        <p className="text-neutral text-xs">{transactionDate}</p>
        <div className="my-4 w-full p-4 bg-primary bg-opacity-30 flex items-center gap-6 rounded">
          <FaRegCheckCircle className="text-3xl text-primary" />
          <div>
            <h3 className="font-semibold">Transaction Completed.!</h3>
            <p className="text-neutral text-xs">Tap to view this transaction</p>
          </div>
        </div>
        <div className="rounded-lg border border-neutral p-4">
          <div className="flex justify-between ">
            <div className="">
              <h2 className="text text-secondary font-medium">From</h2>
              <h2 className="text-xl font-semibold">{senderDetails.sender}</h2>
              <div className="text-xs italic mb-2">
                <p>
                  {senderDetails.bank}, {senderDetails.IFSC}
                </p>
                <p>A/C No. {senderDetails.accountNo}</p>
              </div>
              <p className="text-neutral text-xs">
                {senderDetails.transactionDate}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#13141a] flex items-center justify-center">
              <span>BS</span>
            </div>
          </div>
          <div className="flex justify-between my-8">
            <div className="">
              <h2 className="text text-secondary font-medium">To</h2>
              <h2 className="text-xl font-semibold">
                {receiverDetails.receiver}
              </h2>
              <div className="text-xs italic mb-2">
                <p>{receiverDetails.wallet}</p>
                <p>Ref No. {receiverDetails.referenceNo}</p>
              </div>
              <p className="text-neutral text-xs">
                {receiverDetails.transactionDate}
              </p>
            </div>
            <RiWallet3Fill className="text-4xl text-primary" />
          </div>

          <div className="text-xs">
            <p>
              <b>Payment Method: </b> {paymentMethod}
            </p>
            <p className="flex items-end gap-2">
              <b>Transaction ID: </b> <span>{transactionId}</span>
              <span>
                <FaRegCopy className="text-2xl text-secondary cursor-pointer" />
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="btn btn-secondary outline-none border-none px-10 py-2">
            Help
          </button>
          <button className="btn bg-[#2A2D3C] text-neutral outline-none border-none px-10 py-2">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
