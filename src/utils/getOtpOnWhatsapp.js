import { API } from ".";
import { AxiosSecure } from "../lib/AxiosSecure";

const getOtpOnWhatsapp = async (mobileNo, setOrderId, setOtp) => {
  const otpData = {
    mobile: mobileNo,
    type: "otpsend",
  };

  const res = await AxiosSecure.post(API.otpless, otpData);
  const data = res.data;

  if (data?.success) {
    setOrderId({
      orderId: data?.result?.orderId,
      otpMethod: "whatsapp",
    });
    setOtp(data?.result?.message);
  } else {
    setOtp(data?.error?.errorMessage);
  }
};

export default getOtpOnWhatsapp;
