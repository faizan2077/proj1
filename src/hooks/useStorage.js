import { useEffect, useState } from "react";

export const useStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(() => {
    try {
      const data = localStorage.getItem(key);
      if (data !== null) {
        return JSON.parse(data);
      }
      return defaultValue;
    } catch {
      return defaultValue;
    }
  });
  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [key, value]);
  return [value, setValue];
};
