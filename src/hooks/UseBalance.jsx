import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseEncryptData from "./UseEncryptData";
import UseTokenGenerator from "./UseTokenGenerator";

import { useNavigate } from "react-router-dom";
import UseState from "./UseState";
import { API, settings } from "../utils";
/* Balance api */
const UseBalance = () => {
  const token = localStorage.getItem("token");
  /* Refetch bet exposure function*/
  const { setRefetchBetsExposure } = UseState();
  const navigate = useNavigate();

  /* Get balance from api */
  const { data: balanceData, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      /* Random token */
      const generatedToken = UseTokenGenerator();
      /* Encrypted data */
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(API.balance, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res?.data?.success === false && token) {
        localStorage.clear();
        navigate("/login");
      } else if (res?.data?.success && token) {
        const data = res.data?.result;

        setRefetchBetsExposure(data?.update);
        return data;
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: settings?.balanceApiLoop ? 6000 : null,
  });

  return [balanceData, refetchBalance];
};

export default UseBalance;
