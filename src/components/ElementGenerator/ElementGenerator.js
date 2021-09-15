import React, { useState, useCallback } from 'react';
import './ElementGenerator.css';
import ItemsList from './ItemsList';

function ElementGenerator() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'darkred' : 'black',
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, idx) => `Element ${idx + 1}`);
  }, [count]);

  return (
    <div className="element-generator">
      <h3>useCallback</h3>
      <h2 className="element-generator__title" style={styles}>
        Element count: {count}
      </h2>
      <div className="element-generator__buttons">
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Add element
        </button>
        <button
          onClick={() => {
            setColored((prev) => !prev);
          }}
        >
          Add element
        </button>
      </div>
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default ElementGenerator;
