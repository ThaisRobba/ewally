import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import dayjs from "dayjs";

import { createDateRangeByDays } from "../utils";

const formatStatementData = (entries, start, end) => {
  const expenses = {
    label: "Saída",
    backgroundColor: "#F85F73",
    data: []
  };

  const income = {
    label: "Entrada",
    backgroundColor: "#22FF73",
    data: []
  };

  const data = {
    labels: [],
    datasets: [expenses, income]
  };

  const days = createDateRangeByDays(start, end);

  days.forEach((date, i) => {
    expenses.data[i] = 0;
    income.data[i] = 0;

    data.labels.push(date.format("DD/MM"));
    entries.forEach(entry => {
      if (dayjs(entry.createdAt).isSame(date, "date")) {
        if (entry.amount < 0) {
          expenses.data[i] += entry.amount;
        } else {
          income.data[i] += entry.amount;
        }
      }
    });
  });

  return data;
};

const StatementChart = ({ entries, start, end }) => {
  if (entries.length <= 0) {
    return <></>;
  }

  const options = {
    scales: {
      yAxes: [{ stacked: true }],
      xAxes: [{ stacked: true }]
    }
  };

  return (
    <Bar data={formatStatementData(entries, start, end)} options={options} />
  );
};

StatementChart.propTypes = {
  entries: PropTypes.array.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};

export default StatementChart;
