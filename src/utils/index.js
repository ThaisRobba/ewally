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

export const formatTransactionType = type => {
  switch (type) {
    case "RECEIVED_TRANSFERENCE":
      return "Transferência recebida";
    case "SENT_TRANSFERENCE":
      return "Transferência para terceiros";
    case "BANK_SLIP_DEPOSIT":
      return "Depósito via boleto bancário";
    case "BANK_SLIP_PAYMENT":
      return "Pagamento via boleto bancário";
    case "BANK_DEPOSIT":
      return "Depósito bancário";
    case "ECARD_CHARGE_TAX":
      return "Taxa de uso do cartão";
    case "ECARD_CHARGE":
      return "Uso do cartão";
    case "EAGENT_DEPOSIT":
      return "Depósito de agente Ewally";
    case "EAGENT_DEPOSIT_TAX":
      return "Taxa de depósito de agente Ewally";
    case "EAGENT_DEPOSIT_EAGENT":
      return "Depósito de agente Ewally para outro agente";
    case "EAGENT_DEPOSIT_EARNING":
      return "Comissão de depósito de agente Ewally";
    default:
      return type;
  }
};
