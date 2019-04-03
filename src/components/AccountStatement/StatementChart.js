import React from "react";
import { Bar } from "react-chartjs-2";

const randomScalingFactor = () => {
  let multiplier = Math.random() > 0.5 ? 1 : -1;
  return Math.round(Math.random() * 100 * multiplier);
};

//TODO: Assemble data from statements

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  datasets: [
    {
      label: "Saída",
      backgroundColor: "#F85F73",
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ]
    },
    {
      label: "Entrada",
      backgroundColor: "#22FF73",
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ]
    },
    {
      label: "Dataset 3",
      backgroundColor: "#00FFFF",
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ]
    }
  ]
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true
      }
    ]
  }
};

const formatStatementData = statement => {
  return data;
};

const StatementChart = ({ statement }) => {
  return <Bar data={formatStatementData(statement)} options={options} />;
};

export default StatementChart;
