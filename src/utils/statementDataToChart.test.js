import statementDataToChart from "./statementDataToChart";

describe("Converting statement to chart compatible data", () => {
  const earlierDate = "2019-01-01";
  const secondDay = "2019-01-02";
  const laterDate = "2019-01-31";

  const sampleData = [
    {
      createdAt: earlierDate,
      amount: 100
    },
    {
      createdAt: secondDay,
      amount: -100
    }
  ];

  test("should have as many labels as the range of days", () => {
    const result = statementDataToChart([], earlierDate, laterDate);

    expect(result.labels.length).toBe(31);
  });

  test("should have no labels for a zeroed range of days", () => {
    const result = statementDataToChart([], laterDate, earlierDate);

    expect(result.labels.length).toBe(0);
  });

  test("first dataset should be expenses", () => {
    const result = statementDataToChart(sampleData, earlierDate, laterDate);
    result.datasets[0].data.forEach(amount => {
      expect(amount).toBeLessThanOrEqual(0);
    });
  });

  test("second dataset should be income", () => {
    const result = statementDataToChart(sampleData, earlierDate, laterDate);

    result.datasets[1].data.forEach(amount => {
      expect(amount).toBeGreaterThanOrEqual(0);
    });
  });

  test("data structure should match chartjs format", () => {
    const sampleOutput = {
      labels: ["01/01", "02/01"],
      datasets: [
        { label: "Saída", backgroundColor: "#F85F73", data: [0, -100] },
        { label: "Entrada", backgroundColor: "#22FF73", data: [100, 0] }
      ]
    };

    const result = statementDataToChart(sampleData, earlierDate, secondDay);

    expect(result).toEqual(sampleOutput);
  });
});
