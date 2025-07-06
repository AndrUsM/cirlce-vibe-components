export const useLocalStorage = () => {
  const set = (key: string, value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  const get = (key: string) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return null;
    }
  };

  const remove = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage", error);
    }
  };

  const clear = () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage", error);
    }
  };

  return {
    set,
    get,
    remove,
    clear,
  };
};
