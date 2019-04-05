import dayjs from "dayjs";
import { createDateRangeByDays } from ".";

const formatStatementData = (entries, start, end) => {
  const expenses = {
    label: "Saída",
    backgroundColor: "#F85F73",
    data: []
  };

  const income = {
    label: "Entrada",
    backgroundColor: "##00a1b6",
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

export default formatStatementData;
