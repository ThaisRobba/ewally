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
