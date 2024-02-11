import React, { useState } from 'react';

const Shop = () => {
  const [count, setCount] = useState(0);

  const bar = () => {
    throw new Error('ОШИБКА');
  };

  const foo = () => {
    bar();
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>

      <button onClick={foo}>ERROR!!!</button>
    </div>
  );
};

export default Shop;
