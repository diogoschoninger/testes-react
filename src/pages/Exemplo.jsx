import { useState } from "react";

export const Exemplo = () => {
  const [count, setCount] = useState(0);

  return(
    <button
      style={{padding: '20px'}}
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}
