import React, { useState, useEffect } from "react";

import AccountStatement from "../components/AccountStatement";
import AccountSidebar from "../components/AccountSidebar";

import { useStateValue } from "../state";
import fetchBalance from "../utils/fetchBalance";

const Account = () => {
  const [{ token }] = useStateValue();
  const [balance, setBalance] = useState("Calculando...");

  //TODO: If token is empty, we take the person back to the login screen

  useEffect(() => {
    fetchBalance(token, res => setBalance(res.data.balance));
  }, []);

  return (
    <>
      <AccountSidebar balance={balance} />
      <AccountStatement token={token} />
    </>
  );
};

export default Account;
