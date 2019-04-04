import React from "react";

const TransactionList = ({ entries }) => {
  if (entries.length < 1) {
    return <p>Nenhuma operação encontrada para o período selecionado.</p>;
  }

  return (
    <ol>
      {entries.map(entry => {
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
