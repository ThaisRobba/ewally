import React, { useState, useEffect } from "react";
import styled from "styled-components";

import AccountStatement from "../components/AccountStatement";
import AccountSidebar from "../components/AccountSidebar";

import { useStateValue } from "../state";
import fetchBalance from "../utils/fetchBalance";

const Container = styled.div`
  @media (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100%;
  }
`;

const Account = () => {
  const [{ token }] = useStateValue();
  const [balance, setBalance] = useState();

  useEffect(() => {
    fetchBalance(token, res => setBalance(res.data.balance));
  }, []);

  return (
    <Container>
      <AccountSidebar balance={balance} />
      <AccountStatement token={token} />
    </Container>
  );
};

export default Account;
