import React, { useEffect, useState } from "react";
import axios from "axios";

import DateFilter from "./DateFilter";
import TransactionList from "./TransactionList";
import StatementChart from "./StatementChart";

import { api, getDateString, getHeaderConfig } from "../utils";

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
  //TODO: Revert back to dynamic state
  const [start, setStart] = useState("2019-01-01"); //useState(getDateString(-30));
  const [end, setEnd] = useState("2019-01-31"); //useState(getDateString());
  const [statement, setStatement] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    setIsFetchingData(false);
  }, [statement]);

  useEffect(() => {
    setIsFetchingData(true);
    getStatement(token, start, end, setStatement);
  }, [start, end]);

  return (
    <div>
      <DateFilter
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        max={getDateString()}
      />
      {isFetchingData ? <h1>fetching data...</h1> : <h2>data fetched!</h2>}
      <StatementChart entries={statement} start={start} end={end} />
      <TransactionList entries={statement} />
    </div>
  );
};

export default AccountStatement;
