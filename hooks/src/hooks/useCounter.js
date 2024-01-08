import { useState } from "react";
//http://files.cod3r.com.br/curso-react/estados.json
export const useCounter = (initialValue = 51) => {
  const [count, setCount] = useState(initialValue);

  function inc(){
    setCount(count+1)
  }

  function dec(){
    setCount(count-1)
  }

  return [count, inc, dec]
};
