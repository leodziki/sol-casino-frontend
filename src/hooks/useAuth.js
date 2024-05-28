import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import setAuthToken from "../helpers/setAuthToken";
import globalContext from "../context/global/globalContext";

const useAuth = () => {
  localStorage.token && setAuthToken(localStorage.token);

  const {
    setIsLoading,
    setIsLogoutTriggered,
    setWAddress,
    setUserName,
    setChipsAmount,
    setProfitAmount,
  } = useContext(globalContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const token = localStorage.token;
    if (token) {
      loadUser(token);
    }

    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  const login = async (wAddress) => {
    if (!wAddress) return;

    setIsLoading(true);
    try {
      const res = await Axios.post("/api/auth", {
        wAddress: wAddress,
      });

      const token = res.data.token;
      if (token) {
        localStorage.setItem("token", token);
        setAuthToken(token);
        await loadUser(token);
      } else {
        const errorMsg = res.data.errorMsg;
        if (errorMsg) {
          alert(errorMsg);
        }
      }
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  };

  const loadUser = async (token) => {
    try {
      console.log("loadUser 1");
      const res = await Axios.get("/api/auth", {
        headers: {
          "x-auth-token": token,
        },
      });

      if (!res || !res.data) {
        throw new Error("Response or data is null or empty");
      }

      const { wAddress, name, chipsAmount, ownerProfit } = res.data;

      console.log(
        `loadUser : chipsAmount : ${chipsAmount}, name: ${name}, address: ${wAddress}, own_profit: ${ownerProfit}`
      );
      setIsLoggedIn(true);
      setWAddress(wAddress);
      setUserName(name);
      setChipsAmount(chipsAmount);
      setProfitAmount(ownerProfit);
    } catch (error) {
      localStorage.removeItem(token);
      console.log(error);
    }
  };

  const logout = () => {
    setIsLogoutTriggered(true);
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setWAddress(null);
    setUserName(null);
    setChipsAmount(null);
  };

  return [isLoggedIn, login, logout, loadUser];
};

export default useAuth;
