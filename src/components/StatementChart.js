import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

import statementDataToChart from "../utils/statementDataToChart";

const Container = styled.div`
  padding: 0px 16px 0 10px;
`;

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
    <Container>
      <Bar data={statementDataToChart(entries, start, end)} options={options} />
    </Container>
  );
};

StatementChart.propTypes = {
  entries: PropTypes.array.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};

export default StatementChart;
