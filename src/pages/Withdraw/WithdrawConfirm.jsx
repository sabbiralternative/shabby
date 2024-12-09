import { useState } from "react";
import axios from "axios";
import handleRandomToken from "../../utils/handleRandomToken";
import toast from "react-hot-toast";
import handleEncryptData from "../../utils/handleEncryptData";
import WithdrawSuccess from "../../components/Modal/WithdrawSuccess";
import { API, settings } from "../../utils";

const WithdrawConfirm = ({
  bank,
  amount,
  setBank,
  setAmount,
  setShowBankAccount,
  setConfirmWithdraw,
}) => {
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const token = localStorage.getItem("token");
  const [disable, setDisable] = useState(false);
  /* handle withdraw function */
  const handleCoinSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    if (amount?.length > 0 && bank) {
      const generatedToken = handleRandomToken();
      const bankData = {
        type: "withdrawCoins",
        amount: amount,
        bankId: bank?.bankId,
        token: generatedToken,
        site: settings.siteUrl,
      };
      const encryptedData = handleEncryptData(bankData);
      const res = await axios.post(API.bankAccount, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        toast.success(data?.result?.message);
        setWithdrawSuccess(true);
      } else {
        toast.error(data?.error?.errorMessage);
      }
    }
  };
  return (
    <>
      <div className="withdraw-account">
        <div
          onClick={() => {
            setShowBankAccount(true);
            setConfirmWithdraw(false);
          }}
          className="back-nav-bc "
        >
          <img
            loading="lazy"
            src="/assets/back-arrow.svg"
            alt=""
            className=""
          />
          <span className="back-nav-title-bc ellipsis ">
            Back to Select Account
          </span>
        </div>
        <div className="withdraw-amount ">
          <span className="">Withdrawal Amount</span>
          <div
            style={{ cursor: "pointer" }}
            className="edit-logo"
            onClick={() => {
              setBank("");
              setShowBankAccount(false);
              setConfirmWithdraw(false);
              setAmount("");
            }}
          >
            <img loading="lazy" src="/assets/edit.svg" alt="" className="" />
          </div>
        </div>
        <input
          type="text"
          name=""
          className=""
          defaultValue={amount}
          disabled
        />
        <div className="bank-account ">
          <span className="">Bank Account</span>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowBankAccount(true);
              setConfirmWithdraw(false);
            }}
            className="edit-logo "
          >
            <img loading="lazy" src="/assets/edit.svg" alt="" className="" />
          </div>
        </div>
        <div className="bank-card1 ">
          <div className="bank-logo1 ">
            <div className="logo ">
              <img
                style={{ maxWidth: "50px", width: "50px" }}
                loading="lazy"
                alt=""
                className=""
                src="/assets/bankPicture.svg"
              />
              <p className="">{bank?.bankName}</p>
            </div>
          </div>
          <div className="bank-inner-box ">
            <div className="bank-detail ">
              <div
                style={{
                  width: "max-content",
                  display: "flex",
                  flexDirection: "row",
                }}
                className=""
              >
                <span className="">Bank :-</span>
                <span style={{ marginLeft: "0.2rem" }} className="">
                  {bank?.bankName}
                </span>
              </div>
            </div>
            <div className="bank-detail ">
              <div
                style={{
                  width: "max-content",
                  display: "flex",
                  flexDirection: "row",
                }}
                className=""
              >
                <span className="">IFSC :-</span>
                <span style={{ marginLeft: "0.2rem" }} className="">
                  {bank?.ifsc}
                </span>
              </div>
            </div>
            <div className="bank-detail ">
              <div
                style={{
                  width: "max-content",
                  display: "flex",
                  flexDirection: "row",
                }}
                className=""
              >
                <span className="">Account No :-</span>
                <span className="bank-detail-txt "> {bank?.accountNumber}</span>
              </div>
            </div>
          </div>
        </div>
        <button
          disabled={disable}
          onClick={handleCoinSubmit}
          className="proceed-btn"
          style={{ cursor: disable ? "not-allowed" : "pointer" }}
        >
          <span className="" style={{ color: "white" }}>
            Proceed
          </span>
        </button>
      </div>
      {withdrawSuccess && (
        <WithdrawSuccess setWithdrawSuccess={setWithdrawSuccess} />
      )}
    </>
  );
};

export default WithdrawConfirm;
