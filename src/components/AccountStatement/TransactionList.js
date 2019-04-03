import React from "react";

const TransactionList = ({ entries }) => {
  return (
    <ol>
      {entries.statement.map(entry => {
        return (
          <li key={entry.id}>
            date: {entry.createdAt} | amount: {entry.amount} | type:{" "}
            {entry.operationType} | location: {entry.otherInfo.userLatitude}/
            {entry.otherInfo.userLongitude}
          </li>
        );
      })}
    </ol>
  );
};

export default TransactionList;
