import React, { useState, useEffect } from "react";
import axios from "axios";

import AccountStatement from "../components/AccountStatement";
import AccountSidebar from "../components/AccountSidebar";

import { useStateValue } from "../state";
import { API, getHeaderConfig } from "../utils";

const getBalance = (token, setBalance) => {
  axios
    .get(`${API}/account/balance`, getHeaderConfig(token))
    .then(res => {
      setBalance(res.data.balance);
    })
    .catch(error => console.log(error));
};

const Account = () => {
  const [{ token }] = useStateValue();
  const [balance, setBalance] = useState("Calculando...");

  //TODO: If token is empty, we take the person back to the login screen

  useEffect(() => {
    getBalance(token, setBalance);
  }, []);

  return (
    <>
      <AccountSidebar balance={balance} />
      <AccountStatement token={token} />
    </>
  );
};

export default Account;
