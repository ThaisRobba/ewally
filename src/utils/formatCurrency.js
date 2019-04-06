const formatCurrency = amount => {
  let formatted;

  if (amount < 0) {
    formatted = "- R$";
    amount = amount * -1;
  } else {
    formatted = "+ R$";
  }

  formatted += amount.toLocaleString("pt-BR");

  if (amount % 1 === 0) {
    formatted += ",00";
  }

  return formatted;
};

export default formatCurrency;
