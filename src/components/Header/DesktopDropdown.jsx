import { Link } from "react-router-dom";
import { settings } from "../../utils";
import { LanguageKey } from "../../constant";
import UseState from "../../hooks/UseState";
import useLanguage from "../../hooks/use-language";

const DesktopDropdown = ({
  setDropDown,
  dropDown,
  setBalance,
  balance,
  setExp,
  exp,
  logOut,
}) => {
  const { getLanguage } = useLanguage();
  const {
    buttonValue,
    SetButtonValue,

    closePopupForForever,
  } = UseState();
  const openWhatsAppLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="show dropdown">
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
          transform: "translate(-110px, 10px)",
        }}
      >
        <div className="d-xl-none d-flex justify-content-center"></div>
        {/* notice.json if withdraw = true then show withdraw button */}

        {settings?.branchWhatsapplink && (
          <Link onClick={() => openWhatsAppLink(settings?.branchWhatsapplink)}>
            <li data-rr-ui-dropdown-item="" className="dropdown-item">
              {getLanguage(LanguageKey.CUSTOMER_SUPPORT)}
            </li>
          </Link>
        )}
        {settings.withdraw && (
          <Link to="/withdraw-statement" onClick={() => setDropDown(!dropDown)}>
            <li data-rr-ui-dropdown-item="" className="dropdown-item">
              {getLanguage(LanguageKey.WITHDRAW_STATMENT)}
            </li>
          </Link>
        )}
        {/* notice.json if deposit = true then show deposit button */}
        {settings.deposit && (
          <Link to="/deposit-statement" onClick={() => setDropDown(!dropDown)}>
            <li data-rr-ui-dropdown-item="" className="dropdown-item">
              {getLanguage(LanguageKey.DEPOSIT_STATEMENT)}
            </li>
          </Link>
        )}
        <Link to="/account-statement" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {getLanguage(LanguageKey.ACCOUNT_STATEMENT)}
          </li>
        </Link>
        <Link onClick={() => setDropDown(!dropDown)} to="/current-bet">
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {getLanguage(LanguageKey.CURRENT_BETS)}
          </li>
        </Link>
        <Link to="/my-bank-details" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {getLanguage(LanguageKey.MY_BANK_DETAILS)}
          </li>
        </Link>
        <Link to="/bonus-statement" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {getLanguage(LanguageKey.BONUS_STATEMENT)}
          </li>
        </Link>
        {settings?.referral && (
          <Link to="/affiliate" onClick={() => setDropDown(!dropDown)}>
            <li data-rr-ui-dropdown-item="" className="dropdown-item">
              {getLanguage(LanguageKey.AFFILIATE)}
            </li>
          </Link>
        )}
        <Link to="/promotions" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {getLanguage(LanguageKey.PROMOTION_AND_BONUSES)}
          </li>
        </Link>
        <Link to="/lossback-bonus" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {getLanguage(LanguageKey.LOSSBACK_BONUS)}
          </li>
        </Link>
        {closePopupForForever && (
          <Link to="/app-only-bonus" onClick={() => setDropDown(!dropDown)}>
            <li data-rr-ui-dropdown-item="" className="dropdown-item">
              {getLanguage(LanguageKey.APP_ONLY_BONUS)}
            </li>
          </Link>
        )}

        {/* <Link
                          to="/referral-statement"
                          onClick={() => {
                            setDropDown(false);
                          }}
                        >
                          <li
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                          >
                            Referral Statement
                          </li>
                        </Link> */}

        <Link onClick={() => setDropDown(!dropDown)} to="/activity-logs">
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {getLanguage(LanguageKey.ACTIVITY_LOGS)}
          </li>
        </Link>

        <div
          onClick={() => {
            SetButtonValue(!buttonValue);
            setDropDown(!dropDown);
          }}
        >
          <li className="dropdown-item">
            {getLanguage(LanguageKey.EDIT_STAKE)}
          </li>
        </div>

        <Link to="/secure-auth" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {getLanguage(LanguageKey.SECURITY_AUTH_VERIFICATION)}
          </li>
        </Link>
        <Link onClick={() => setDropDown(!dropDown)} to="/change-password">
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {getLanguage(LanguageKey.CHANGE_PASSWORD)}
          </li>
        </Link>
        {/* {settings?.whatsapplink && (
                          <Link
                            onClick={() =>
                              openWhatsAppLink(settings?.whatsapplink)
                            }
                          >
                            <li
                              data-rr-ui-dropdown-item=""
                              className="dropdown-item"
                            >
                              All Support
                            </li>
                          </Link>
                        )} */}
        <div className="d-xl-none">
          <li className="dropdown-item"> {getLanguage(LanguageKey.RULES)}</li>
        </div>

        <Link
          onClick={() => setBalance(!balance)}
          className="dropdown-item d-xl-none"
        >
          {getLanguage(LanguageKey.BALANCE)}
          <div className="form-check float-end">
            <input className="form-check-input" type="checkbox" />
          </div>
        </Link>
        <Link onClick={() => setExp(!exp)} className="dropdown-item d-xl-none">
          {getLanguage(LanguageKey.EXPOSURE)}
          <div className="form-check float-end">
            <input className="form-check-input" type="checkbox" />
          </div>
        </Link>
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
  );
};

export default DesktopDropdown;
