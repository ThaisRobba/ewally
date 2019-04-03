import React, { useEffect, useState } from "react";
import axios from "axios";

import DateFilter from "./DateFilter";
import TransactionList from "./TransactionList";

import { api, getDateString, getHeaderConfig } from "../../utils";

const getStatement = (token, start, end, setStatement) => {
  axios
    .get(
      `${api}/b2b/statement?initialDate=${start}&finalDate=${end}`,
      getHeaderConfig(token)
    )
    .then(res => setStatement(res.data.statement))
    .catch(error => console.log(error));
};

const AccountStatement = ({ token }) => {
  const [start, setStart] = useState(getDateString(-30));
  const [end, setEnd] = useState(getDateString());
  const [statement, setStatement] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);

  useEffect(() => {
    getStatement(token, start, end, setStatement);
  }, []);

  return (
    <div>
      <DateFilter
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        max={getDateString()}
        setSearchFlag={setSearchFlag}
      />
      <h1>gráfico de extrato</h1>
      <h1>detalhamento de operações</h1>
      <TransactionList entries={statement} />
    </div>
  );
};

export default AccountStatement;
