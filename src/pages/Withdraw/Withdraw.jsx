import { useState } from "react";
import ChooseAmount from "./ChoseAmount";
import BankAccount from "./BankAccount";
import { Toaster } from "react-hot-toast";
import "./withdraw.css";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [tab, setTab] = useState("choseAmount");
  return (
    <div className="center-container withdraw-main-wrapper">
      {tab === "choseAmount" && (
        <ChooseAmount amount={amount} setAmount={setAmount} setTab={setTab} />
      )}
      {tab === "bank" && <BankAccount amount={amount} />}
      <Toaster />
    </div>
  );
};

export default Withdraw;
