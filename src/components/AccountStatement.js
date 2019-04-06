import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import DateFilter from "./DateFilter";
import TransactionList from "./TransactionList";
import StatementChart from "./StatementChart";

import getStatement from "../utils/getStatement";

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
    setIsFetchingData(true);

    getStatement(token, start, end, res => {
      setStatement(res.data.statement);
      setIsFetchingData(false);
    });
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
      <StatementChart entries={statement} start={start} end={end} />
      <TransactionList entries={statement} isFetchingData={isFetchingData} />
    </div>
  );
};

export default AccountStatement;
