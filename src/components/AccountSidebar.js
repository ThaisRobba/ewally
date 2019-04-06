import React from "react";
// import PropTypes from "PropTypes";
import styled from "styled-components";
import Background from "./Background";
import Spinner from "./Spinner";

import { formatCurrency } from "../utils";

const Sidebar = styled.div`
  padding: 16px;
`;

const BalanceTitle = styled.p`
  font-size: 24px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  font-weight: 600;
  padding-bottom: 6px;
  border-bottom: 1px solid white;
`;

const BalanceValue = styled.p`
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  margin-top: 16px;
`;

const AccountSidebar = ({ balance }) => {
  return (
    <Background color="#00a1b6">
      <Sidebar>
        <BalanceTitle>Saldo</BalanceTitle>
        {balance === undefined ? (
          <Spinner size="4" margin="28px auto 12px" />
        ) : (
          <BalanceValue>{formatCurrency(balance)}</BalanceValue>
        )}
      </Sidebar>
    </Background>
  );
};

// AccountSidebar.propTypes = {
//   balance: PropTypes.number
// };

export default AccountSidebar;
