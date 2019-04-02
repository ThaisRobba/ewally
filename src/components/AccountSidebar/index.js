import React from "react";

const AccountSidebar = ({ currentBalance }) => {
  return (
    <div>
      <p>Saldo: {currentBalance}</p>
    </div>
  );
};

export default AccountSidebar;
