import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import dayjs from "dayjs";

const getDates = (start, end) => {
  const dates = [];

  const date1 = dayjs(start);
  const date2 = dayjs(end);

  for (let i = 0; i <= date2.diff(date1, "day"); i++) {
    dates.push(dayjs(start).add(i, "day"));
  }

  return dates;
};

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

  const days = getDates(start, end);

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
