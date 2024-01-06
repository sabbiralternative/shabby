import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseEncryptData from "./UseEncryptData";
import UseTokenGenerator from "./UseTokenGenerator";
import { useEffect } from "react";
import { config } from "../utils/config";
import { useNavigate } from "react-router-dom";
import UseState from "./UseState";

const UseBalance = () => {
  const balanceAPi = config?.result?.endpoint?.balance;
  const token = localStorage.getItem("token");
  const { setRefetchBetsExposure } = UseState();
  const navigate = useNavigate();

  const { data: balanceData, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(balanceAPi, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res?.data?.success === false && token) {
        localStorage.clear();
        navigate("/login");
      } else if (res?.data?.success) {
        const data = res.data?.result;
        setRefetchBetsExposure(data?.update);
        return data;
      }
    },
    staleTime: 6000,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetchBalance();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [refetchBalance]);

  return [balanceData, refetchBalance];
};

export default UseBalance;
