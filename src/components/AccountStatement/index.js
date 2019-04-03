import React, { useEffect, useState } from "react";
import axios from "axios";

import DateFilter from "./DateFilter";
import TransactionList from "./TransactionList";

import { api, getHeaderConfig } from "../../utils";

import entries from "./sampleData.json";

console.log(entries);
const getStatement = (token, start, end) => {
  let initialDate = "2019-01-01";
  let finalDate = "2019-01-31";

  axios
    .get(
      `${api}/b2b/statement?initialDate=${start}&finalDate=${end}`,
      getHeaderConfig(token)
    )
    .then(res => console.log("res is: ", res))
    .catch(error => console.log(error));
};

const AccountStatement = ({ token }) => {
  const [start, setStart] = useState("2019-04");
  const [end, setEnd] = useState("2019-04");
  const [statemente, setStatement] = useState([]);

  useEffect(() => {
    getStatement(token, start, end, setStatement);
  }, [start, end]);

  return (
    <div>
      <DateFilter />
      <h1>gráfico de extrato</h1>
      <h1>detalhamento de operações</h1>
      <TransactionList entries={entries} />
    </div>
  );
};

export default AccountStatement;
