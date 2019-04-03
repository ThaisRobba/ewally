//TODO: Remove unused proxy
export const proxy = "https://cors-anywhere.herokuapp.com";
export const api = "https://apidev.ewally.com.br";

export const getHeaderConfig = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

export const getDateString = (offset = 0) => {
  const date = new Date().setDate(new Date().getDate() + offset);
  return new Date(date).toISOString().substring(0, 10);
};
