import { Fragment, useState } from "react";

import { useGetIndex } from "../../../hooks";
import AddNewUser from "../../Modal/Affiliate/AddNewUser";
import assets from "../../../assets";
import { handleCopyToClipBoard } from "../../../utils/handleCopyToClipBoard";
import { settings } from "../../../utils";
import { getSiteURL } from "../../../utils/getSiteURL";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../constant";

const InviteSection = () => {
  const { getLanguage } = useLanguage();
  let payload = { type: "get_referral_code" };
  const { siteURL } = getSiteURL();
  if (siteURL) {
    payload.site = siteURL;
  }
  const [showAddNewUserModal, setShowAddNewUserModal] = useState(false);
  const { data } = useGetIndex(payload);

  return (
    <Fragment>
      {showAddNewUserModal && (
        <AddNewUser setShowAddNewUserModal={setShowAddNewUserModal} />
      )}
      <div
        data-v-4c49d924
        className="nw-affi-invite-sec"
        style={{ marginBottom: "20px" }}
      >
        <div className="nw-affi-invite-content-wrapper" data-v-4c49d924>
          <div className="nw-affi-invite-content" data-v-4c49d924>
            <h2 data-v-4c49d924>
              {getLanguage(LanguageKey.INVITE_YOUR_FRIENDS)}
            </h2>
            <p data-v-4c49d924>
              {getLanguage(
                LanguageKey.TO_JOIN_AND_YOU_CAN_RECEIVE_HUGE_BONUSES,
              )}
            </p>
          </div>
          <div className="nw-affi-invite-img" data-v-4c49d924>
            <img
              src={assets.affiInvite}
              alt="affi-invite-img"
              data-v-4c49d924
            />
          </div>
        </div>
        {settings?.referral_create_account && (
          <div className="nw-affi-add-new-user-btn-sec" data-v-4c49d924>
            <button
              onClick={() => setShowAddNewUserModal(true)}
              className="nw-affi-add-new-user-btn"
              data-bs-target="#AfAddNewUser"
              data-bs-toggle="modal"
              data-v-4c49d924
            >
              <span data-v-4c49d924>
                <img
                  style={{ height: "20px", width: "20px" }}
                  src={assets.affiAddUser}
                  alt="affi-add-user"
                  data-v-4c49d924
                />{" "}
                {getLanguage(LanguageKey.ADD_NEW_USER)}
              </span>
            </button>
          </div>
        )}
        <div data-v-4c49d924 className="nw-affi-qr-invite-wrapper">
          <div data-v-4c49d924 className="nw-affi-qr-invite-code">
            <div data-v-4c49d924 className="nw-affi-qr-invite-heading">
              <img
                data-v-4c49d924
                src={assets.affiInviteGift}
                alt="invite-gift"
              />
              <h3 data-v-4c49d924>
                {getLanguage(LanguageKey.INVITATION_CODE)}
              </h3>
            </div>
            <div data-v-4c49d924 className="nw-affi-share-link-sec">
              <span data-v-4c49d924>{data?.result?.link}</span>
              <button
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "0px",
                  backgroundColor: "transparent",
                }}
                onClick={() => handleCopyToClipBoard(data?.result?.text)}
                data-v-4c49d924
                className="thm-but thm-bdr-btn affi-cancel-btn affi-yellow-btn"
              >
                <img data-v-4c49d924 src={assets.affiCopy} alt="affi-copy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InviteSection;
