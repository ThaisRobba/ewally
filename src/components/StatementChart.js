import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";

import { statementDataToChart } from "./statementDataToChart";

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
    <Bar data={statementDataToChart(entries, start, end)} options={options} />
  );
};

StatementChart.propTypes = {
  entries: PropTypes.array.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};

export default StatementChart;
