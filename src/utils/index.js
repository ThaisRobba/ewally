export const API = "https://apidev.ewally.com.br";

export const getHeaderConfig = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};
