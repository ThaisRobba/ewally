import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

import DateFilter from "./DateFilter";
import TransactionList from "./TransactionList";
import StatementChart from "./StatementChart";

import { api, getHeaderConfig } from "../utils";

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
  const [start, setStart] = useState(
    dayjs()
      .subtract(30, "day")
      .format("YYYY-MM-DD")
  );
  const [end, setEnd] = useState(dayjs().format("YYYY-MM-DD"));
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
        max={dayjs().format("YYYY-MM-DD")}
      />
      {isFetchingData ? <h1>fetching data...</h1> : <h2>data fetched!</h2>}
      <StatementChart entries={statement} start={start} end={end} />
      <TransactionList entries={statement} />
    </div>
  );
};

export default AccountStatement;
