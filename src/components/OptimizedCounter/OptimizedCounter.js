import React, { useState, useMemo, useEffect } from 'react';
import './OptimizedCounter.css';

const complexCompute = (num) => {
  console.log('complexCompute HERE!');
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
};

function OptimizedCounter() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? 'red' : 'black',
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log('Styled changed!');
  }, [styles]);

  return (
    <div className="optimized-counter">
      <h3>useMemo</h3>
      <h2 style={styles}>Calculated numder: {computed}</h2>
      <div className="optimized-counter__buttons">
        <button onClick={() => setNumber((prevValue) => prevValue + 1)}>
          Incriment
        </button>
        <button onClick={() => setNumber((prevValue) => prevValue - 1)}>
          Dectiment
        </button>
      </div>
      <button
        onClick={() => {
          setColored((prev) => !prev);
        }}
      >
        Изменить
      </button>
    </div>
  );
}

export default OptimizedCounter;
