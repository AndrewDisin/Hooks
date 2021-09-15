import React, { useEffect, useState } from 'react';

export default function ItemsList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
    console.log('render here!');
  }, [getItems]);

  return (
    <ul>
      {items.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
}
