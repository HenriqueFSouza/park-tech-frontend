import { useEffect, useState } from "react";

export const useDebounce = (value: string) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [debounce, value]);

  return debounce;
};
