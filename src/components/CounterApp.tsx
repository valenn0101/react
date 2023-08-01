import React, { useState } from "react";

type PropType = {
  value: number;
};

function CounterApp({ value }: PropType) {
  const [counter, setCounter] = useState(value);

  const handleAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCounter(counter + 1);
  };
  const handleSubstract: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCounter(counter - 1);
  };
  const handleReset: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
}

export default CounterApp;
