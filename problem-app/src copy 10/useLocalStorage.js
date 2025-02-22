import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  
  useEffect(()=>{
    localStorage.getItem(key,value)
  },[])

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
