import React, { useEffect, useState } from "react";

import Map from "./Map";

const TransactionList = ({ entries }) => {
  const [selectedEntry, setSelectedEntry] = useState();

  useEffect(() => {
    setSelectedEntry(null);
  }, [entries]);

  if (entries.length < 1) {
    return <p>Nenhuma operação encontrada para o período selecionado.</p>;
  }

  return (
    <ol>
      {entries.map(entry => {
        return (
          <li
            key={entry.id}
            onClick={() => {
              setSelectedEntry(entry.id);
              console.log(selectedEntry);
            }}
          >
            {/*4 col and then 2 col */}
            <div className="transaction-base-info">
              {" "}
              date: {entry.createdAt} | amount: {entry.amount} | type:{" "}
              {entry.operationType}
            </div>
            <div
              className="transaction-extra-info"
              hidden={selectedEntry !== entry.id}
            >
              | location:
              <Map
                latitude={entry.otherInfo.userLatitude}
                longitude={entry.otherInfo.userLongitude}
              />
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default TransactionList;
