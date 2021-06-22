import { useState, useEffect } from 'react';

export const usePersistedState = (key: string, defaultValue: any): [any, React.Dispatch<any>] => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    try {
      setValue(JSON.parse(localStorage.getItem(key)));
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
