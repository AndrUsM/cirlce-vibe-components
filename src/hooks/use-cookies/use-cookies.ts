import cookies from "js-cookie";

export const useCookies = () => {
  const set = (name: string, value: string, days = 7) => {
    cookies.set(name, value, { expires: days });
  };

  const get = (name: string) => {
    return cookies.get(name);
  };

  const remove = (name: string) => {
    cookies.remove(name);
  };

  return {
    set,
    get,
    remove,
  };
};
