import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import DateFilter from "./DateFilter";
import TransactionList from "./TransactionList";
import StatementChart from "./StatementChart";

import getStatement from "../utils/getStatement";
import data from "./sampleData";

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
    //TODO: revert back to real API

    setStatement(data.statement);
    // getStatement(token, start, end, res => setStatement(res.data.statement));
  }, [start, end]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "50px 3fr 3fr",
        height: "100%"
      }}
    >
      <DateFilter
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        max={dayjs().format("YYYY-MM-DD")}
      />
      <StatementChart entries={statement} start={start} end={end} />
      <TransactionList entries={statement} />
    </div>
  );
};

export default AccountStatement;
