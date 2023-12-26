// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import UseEncryptData from "./UseEncryptData";
// import UseTokenGenerator from "./UseTokenGenerator";
// import { useEffect } from "react";
// import { config } from "../utils/config";
// import { useNavigate } from "react-router-dom";
// import UseState from "./UseState";

// const UseBalance = () => {
//   const balanceAPi = config?.result?.endpoint?.balance;
//   const token = localStorage.getItem("token");
//   const generatedToken = UseTokenGenerator();
//   const encryptedData = UseEncryptData(generatedToken);
//   const {  setRefetchBetsExposure, setShowExp, setShowBalance } = UseState();
//   const navigate = useNavigate()
//   const { data: balance, refetch: refetchBalance } = useQuery({
//     queryKey: ["balance"],
//     queryFn: async () => {
//       const res = await axios.post(balanceAPi, encryptedData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = res.data?.result;
//       console.log(res);
//       if (res?.data?.success === false) {
//         localStorage.clear();
//         navigate("/login");
//       } else {
//         setRefetchBetsExposure(res?.data?.result?.update);
//         setShowBalance(res?.data?.result?.creditLimit);
//         setShowExp(res?.data?.result?.deductedExposure);
//         return data;
//       }
//     },
//     staleTime: 6000,
//   });

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       refetchBalance();
//     }, 6000);
//     return () => clearInterval(intervalId);
//   }, [refetchBalance]);

//   return [balance, refetchBalance];
// };

// export default UseBalance;
