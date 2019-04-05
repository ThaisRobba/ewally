import dayjs from "dayjs";

export const API = "https://apidev.ewally.com.br";

export const getHeaderConfig = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

export const createDateRangeByDays = (start, end) => {
  const dates = [];

  const date1 = dayjs(start);
  const date2 = dayjs(end);

  for (let i = 0; i <= date2.diff(date1, "day"); i++) {
    dates.push(dayjs(start).add(i, "day"));
  }

  return dates;
};

export const formatCurrency = amount => {
  let formatted = "R$ " + amount.toLocaleString("pt-BR");

  if (amount % 1 === 0) {
    formatted += ",00";
  }

  return formatted;
};
