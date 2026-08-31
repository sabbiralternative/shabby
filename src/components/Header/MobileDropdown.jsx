import { Link } from "react-router-dom";
import { settings } from "../../utils";
import { LanguageKey } from "../../constant";
import useLanguage from "../../hooks/use-language";

const MobileDropdown = ({
  openModalRef,
  setOpen,
  role,
  open,
  // setDropDown,
  // setShowReferral,
  SetButtonValue,
  buttonValue,
  setRuleModal,
  ruleModal,
  setBalance,
  balance,
  setExp,
  exp,
  logOut,
}) => {
  const closePopupForForever = localStorage.getItem("closePopupForForever");

  const { getLanguage } = useLanguage();
  const handleOpenSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <div ref={openModalRef} className="dropdown">
      <div
        onClick={() => setOpen(!open)}
        className="user-name ms-1 ms-xl-3 d-inline-block d-xl-none dropdown-toggle"
        id="react-aria2236598939-1"
        aria-expanded="false"
      >
        {role}
        <i className="fas fa-chevron-down ms-1"></i>
      </div>
      {/* open dropdown for mobile version */}
      {open && (
        <div className="show dropdown ">
          <Link
            className="user-name ms-3 d-none d-xl-block dropdown-toggle show"
            id="react-aria9626335788-2"
            aria-expanded="true"
          >
            Lake777<i className="fas fa-chevron-down ms-1"></i>
          </Link>
          <ul
            // xPlacement="bottom-start"
            aria-labelledby="react-aria9626335788-2"
            className="dropdown-menu show"
            data-popper-reference-hidden="true"
            data-popper-escaped="false"
            data-popper-placement="bottom-start"
            style={{
              position: "absolute",
              inset: "0px auto auto 0px",
              transform: "translate(-190px, 5px)",
            }}
          >
            <div className="d-xl-none d-flex justify-content-center"></div>
            {/* in notice.json if withdraw = true then show this link */}

            <div className="depowith">
              <div
                className="d-xl-none d-flex justify-content-center"
                style={{ gap: "10px" }}
              >
                {/* In notice.json if deposit = true then showDeposit */}
                {settings.deposit && (
                  <Link
                    style={{ padding: "2px 6px" }}
                    onClick={() => setOpen(!open)}
                    className="btn btn-success me-2"
                    to="/deposit"
                  >
                    {getLanguage(LanguageKey.DEPOSIT)}
                  </Link>
                )}
                {/* In notice.json if withdraw = true then showDeposit */}
                {settings.withdraw && (
                  <Link
                    style={{ padding: "2px 6px" }}
                    onClick={() => setOpen(!open)}
                    className="btn btn-danger"
                    to="/withdraw"
                  >
                    {getLanguage(LanguageKey.WITHDRAW)}
                  </Link>
                )}
              </div>{" "}
            </div>
            {settings?.branchWhatsapplink && (
              <Link
                onClick={() =>
                  handleOpenSocialLink(settings?.branchWhatsapplink)
                }
              >
                <li data-rr-ui-dropdown-item="" className="dropdown-item">
                  {getLanguage(LanguageKey.CUSTOMER_SUPPORT)}
                </li>
              </Link>
            )}
            {settings.withdraw && (
              <Link to="/withdraw-statement" onClick={() => setOpen(!open)}>
                <li data-rr-ui-dropdown-item="" className="dropdown-item">
                  {getLanguage(LanguageKey.WITHDRAW_STATMENT)}
                </li>
              </Link>
            )}

            {/* in notice.json if deposit = true then show this link */}
            {settings.deposit && (
              <Link to="/deposit-statement" onClick={() => setOpen(!open)}>
                <li data-rr-ui-dropdown-item="" className="dropdown-item">
                  {getLanguage(LanguageKey.DEPOSIT_STATEMENT)}
                </li>
              </Link>
            )}
            <Link to="/account-statement" onClick={() => setOpen(!open)}>
              <li data-rr-ui-dropdown-item="" className="dropdown-item">
                {getLanguage(LanguageKey.ACCOUNT_STATEMENT)}
              </li>
            </Link>
            <Link onClick={() => setOpen(!open)} to="/current-bet">
              <li data-rr-ui-dropdown-item="" className="dropdown-item">
                {getLanguage(LanguageKey.CURRENT_BETS)}
              </li>
            </Link>
            <Link to="/my-bank-details" onClick={() => setOpen(!open)}>
              <li data-rr-ui-dropdown-item="" className="dropdown-item">
                {getLanguage(LanguageKey.MY_BANK_DETAILS)}
              </li>
            </Link>
            <Link to="/bonus-statement" onClick={() => setOpen(!open)}>
              <li data-rr-ui-dropdown-item="" className="dropdown-item">
                {getLanguage(LanguageKey.BONUS_STATEMENT)}
              </li>
            </Link>

            {settings?.referral && (
              <Link to="/affiliate" onClick={() => setOpen(!open)}>
                <li data-rr-ui-dropdown-item="" className="dropdown-item">
                  {getLanguage(LanguageKey.AFFILIATE)}
                </li>
              </Link>
            )}
            <Link to="/promotions" onClick={() => setOpen(!open)}>
              <li data-rr-ui-dropdown-item="" className="dropdown-item">
                {getLanguage(LanguageKey.PROMOTION_AND_BONUSES)}
              </li>
            </Link>
            <Link to="/lossback-bonus" onClick={() => setOpen(!open)}>
              <li data-rr-ui-dropdown-item="" className="dropdown-item">
                {getLanguage(LanguageKey.LOSSBACK_BONUS)}
              </li>
            </Link>
            {closePopupForForever && (
              <Link to="/app-only-claims" onClick={() => setOpen(!open)}>
                <li data-rr-ui-dropdown-item="" className="dropdown-item">
                  {getLanguage(LanguageKey.APP_ONLY_BONUS)}
                </li>
              </Link>
            )}

            {/* {settings.referral && (
              <a
                onClick={() => {
                  setShowReferral(true);
                  setDropDown(false);
                }}
              >
                <li data-rr-ui-dropdown-item="" className="dropdown-item">
                  Referral
                </li>
              </a>
            )} */}

            {/* <Link
              to="/referral-statement"
              onClick={() => {
                setDropDown(false);
              }}
            >
              <li data-rr-ui-dropdown-item="" className="dropdown-item">
                Referral Statement
              </li>
            </Link> */}

            <Link onClick={() => setOpen(!open)} to="/activity-logs">
              <li data-rr-ui-dropdown-item="" className="dropdown-item">
                {getLanguage(LanguageKey.ACTIVITY_LOGS)}
              </li>
            </Link>

            <div
              onClick={() => {
                SetButtonValue(!buttonValue);
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">
                {getLanguage(LanguageKey.EDIT_STAKE)}
              </li>
            </div>

            <Link to="/secure-auth" onClick={() => setOpen(!open)}>
              <li data-rr-ui-dropdown-item="" className="dropdown-item">
                {getLanguage(LanguageKey.SECURITY_AUTH_VERIFICATION)}
              </li>
            </Link>
            <Link onClick={() => setOpen(!open)} to="/change-password">
              <li data-rr-ui-dropdown-item="" className="dropdown-item">
                {getLanguage(LanguageKey.CHANGE_PASSWORD)}
              </li>
            </Link>
            <Link
              onClick={() => {
                setRuleModal(!ruleModal);
                setOpen(!open);
              }}
              className="d-xl-none"
            >
              <li className="dropdown-item">
                {" "}
                {getLanguage(LanguageKey.RULES)}
              </li>
            </Link>
            <div className="dropdown-item d-xl-none">
              {getLanguage(LanguageKey.BALANCE)}
              <div className="form-check float-end">
                <input
                  style={{ cursor: "pointer" }}
                  onChange={(e) => setBalance(e.target.checked ? true : false)}
                  checked={balance}
                  className="form-check-input"
                  type="checkbox"
                />
              </div>
            </div>
            <div
              // onClick={() => setExp(!exp)}
              className="dropdown-item d-xl-none"
            >
              {getLanguage(LanguageKey.EXPOSURE)}
              <div className="form-check float-end">
                <input
                  style={{ cursor: "pointer" }}
                  onChange={(e) => setExp(e.target.checked ? true : false)}
                  checked={exp}
                  className="form-check-input"
                  type="checkbox"
                />
              </div>
            </div>
            {/* {settings?.whatsapplink && (
              <Link
                onClick={() => handleOpenSocialLink(settings?.whatsapplink)}
              >
                <li data-rr-ui-dropdown-item="" className="dropdown-item">
                  All Support
                </li>
              </Link>
            )} */}
            <hr className="dropdown-divider" role="separator" />
            <li
              onClick={logOut}
              data-rr-ui-dropdown-item=""
              className="dropdown-item"
            >
              {getLanguage(LanguageKey.LOGOUT)}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
