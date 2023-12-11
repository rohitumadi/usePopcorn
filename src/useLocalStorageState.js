import { useEffect, useState } from "react";

function useLocalStorageState(initailState, key) {
  // this callback must be pure and should not accept any arguments.
  function callback() {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue) || initailState;
  }
  const [value, setValue] = useState(callback);
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

export default useLocalStorageState;
