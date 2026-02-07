import { useQuery } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import UseState from "./UseState";
import { API } from "../utils";
import { AxiosSecure } from "../lib/AxiosSecure";
import { handleLogout } from "../utils/handleLogout";
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
      const res = await AxiosSecure.post(API.balance);
      if (res?.data?.success === false && token) {
        handleLogout();
        navigate("/login");
      } else if (res?.data?.success && token) {
        const data = res.data?.result;

        setRefetchBetsExposure(data?.update);
        return data;
      }
    },
  });

  return [balanceData, refetchBalance];
};

export default UseBalance;
