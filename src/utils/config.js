import axios from "axios";
import { API, settings } from "./index";

export const getSetApis = (setNoticeLoaded) => {
  axios
    .get("/notice.json")
    .then((res) => {
      const data = res.data;
      if (data?.result?.endpoint) {
        const endPoints = data?.result?.endpoint;
        const setting = data?.result?.settings;
        API.liveCasinoIframe = endPoints?.liveCasinoIframe;
        API.accessToken = endPoints?.accessToken;
        API.notification = endPoints?.notification;
        API.buttonValue = endPoints?.buttonValue;
        API.login = endPoints?.login;
        API.myMarket = endPoints?.myMarket;
        API.searchEvent = endPoints?.searchEvent;
        API.order = endPoints?.order;
        API.whatsapp = endPoints?.whatsapp;
        API.checkUsername = endPoints?.checkUsername;
        API.register = endPoints?.register;
        API.otp = endPoints?.otp;
        API.menu = endPoints?.menu;
        API.balance = endPoints?.balance;
        API.latestEvents = endPoints?.latestEvents;
        API.accountStatement = endPoints?.accountStatement;
        API.settledBets = endPoints?.settledBets;
        API.activityLogs = endPoints?.activityLogs;
        API.ipDetails = endPoints?.ipDetails;
        API.changePassword = endPoints?.changePassword;
        API.group = endPoints?.group;
        API.currentBets = endPoints?.currentBets;
        API.depositIframe = endPoints?.depositIframe;
        API.fantasyGames = endPoints?.fantasyGames;
        API.ladder = endPoints?.ladder;
        API.auraCasino = endPoints?.auraCasino;
        API.diamondCasino = endPoints?.diamondCasino;
        API.testCasino = endPoints?.testCasino;
        API.liveCasinoWolf = endPoints?.liveCasinoWolf;
        API.exposure = endPoints?.exposure;
        API.odds = endPoints?.odds;
        API.virtualCasino = endPoints?.virtualCasino;
        API.slotsWolf = endPoints?.slotsWolf;
        API.withdrawIframe = endPoints?.withdrawIframe;
        API.assets = endPoints?.assets;
        settings.casino = setting?.casino;
        settings.siteTitle = setting?.siteTitle;
        settings.forceLogin = setting?.forceLogin;
        settings.registration = setting?.registration;
        settings.demoLogin = setting?.demoLogin;
        settings.withdraw = setting?.withdraw;
        settings.deposit = setting?.deposit;
        settings.siteUrl = setting?.siteUrl;
        settings.balanceApiLoop = setting?.balanceApiLoop;
        settings.disabledDevtool = setting?.disabledDevtool;
        settings.casinoCurrency = setting?.casinoCurrency;
        settings.interval = setting?.interval;
        setNoticeLoaded(true);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
