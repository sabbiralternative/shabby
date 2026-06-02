import { Link } from "react-router-dom";
import { settings } from "../../utils";
import useLanguage from "../../hooks/useLanguage";
import { languageValue } from "../../utils/language";
import { LanguageKey } from "../../constant";
import UseState from "../../hooks/UseState";

const DesktopDropdown = ({
  setDropDown,
  dropDown,
  setBalance,
  balance,
  setExp,
  exp,
  logOut,
}) => {
  const { valueByLanguage } = useLanguage();
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
              Customer Support
            </li>
          </Link>
        )}
        {settings.withdraw && (
          <Link to="/withdraw-statement" onClick={() => setDropDown(!dropDown)}>
            <li data-rr-ui-dropdown-item="" className="dropdown-item">
              {languageValue(valueByLanguage, LanguageKey.WITHDRAW_STATMENT)}
            </li>
          </Link>
        )}
        {/* notice.json if deposit = true then show deposit button */}
        {settings.deposit && (
          <Link to="/deposit-statement" onClick={() => setDropDown(!dropDown)}>
            <li data-rr-ui-dropdown-item="" className="dropdown-item">
              {languageValue(valueByLanguage, LanguageKey.DEPOSIT_STATEMENT)}
            </li>
          </Link>
        )}
        <Link to="/account-statement" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            Account Statement
          </li>
        </Link>
        <Link onClick={() => setDropDown(!dropDown)} to="/current-bet">
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            Current Bets
          </li>
        </Link>
        <Link to="/my-bank-details" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {languageValue(valueByLanguage, LanguageKey.MY_BANK_DETAILS)}
          </li>
        </Link>
        <Link to="/bonus-statement" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {languageValue(valueByLanguage, LanguageKey.BONUS_STATEMENT)}
          </li>
        </Link>
        {settings?.referral && (
          <Link to="/affiliate" onClick={() => setDropDown(!dropDown)}>
            <li data-rr-ui-dropdown-item="" className="dropdown-item">
              Affiliate
            </li>
          </Link>
        )}
        <Link to="/promotions" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            Promos & Bonus
          </li>
        </Link>
        <Link to="/lossback-bonus" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            Lossback Bonus
          </li>
        </Link>
        {closePopupForForever && (
          <Link to="/app-only-bonus" onClick={() => setDropDown(!dropDown)}>
            <li data-rr-ui-dropdown-item="" className="dropdown-item">
              App Only Bonus
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
            Activity Logs
          </li>
        </Link>

        <div
          onClick={() => {
            SetButtonValue(!buttonValue);
            setDropDown(!dropDown);
          }}
        >
          <li className="dropdown-item">Set Button Values</li>
        </div>

        <Link to="/secure-auth" onClick={() => setDropDown(!dropDown)}>
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            Security Auth Verification
          </li>
        </Link>
        <Link onClick={() => setDropDown(!dropDown)} to="/change-password">
          <li data-rr-ui-dropdown-item="" className="dropdown-item">
            {languageValue(valueByLanguage, LanguageKey.CHANGE_PASSWORD)}
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
          <li className="dropdown-item">
            {" "}
            {languageValue(valueByLanguage, LanguageKey.RULES)}
          </li>
        </div>

        <Link
          onClick={() => setBalance(!balance)}
          className="dropdown-item d-xl-none"
        >
          {languageValue(valueByLanguage, LanguageKey.BALANCE)}
          <div className="form-check float-end">
            <input className="form-check-input" type="checkbox" />
          </div>
        </Link>
        <Link onClick={() => setExp(!exp)} className="dropdown-item d-xl-none">
          {languageValue(valueByLanguage, LanguageKey.EXPOSURE)}
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
          {languageValue(valueByLanguage, LanguageKey.LOGOUT)}
        </li>
      </ul>
    </div>
  );
};

export default DesktopDropdown;
