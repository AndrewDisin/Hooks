import React, { useState, useEffect, useRef } from 'react';
import './RederCount.css';

function RenderCount() {
  const [value, setValue] = useState('initial');

  // для сохранения данных между рендерами компонента можно использовать useRef...
  //...(очень похож на useState, но без перерисовки компонента, при изменении значения в state)
  const renderCount = useRef(1);

  // используется useRef так же для получения ссылки на Dom-элементы
  const inputRef = useRef(null);

  // useEffect так же используется для получения предыдущего значения state
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = (ref) => {
    ref.current.focus();
  };

  return (
    <div className="renderCount">
      <h3>useReff</h3>
      <h2 className="renderCount__title">
        Render value: {renderCount.current}
      </h2>
      <h2 className="renderCount__title">
        Prev Value (useRef): {prevValue.current}
      </h2>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => focus(inputRef)}>Get focus input</button>
    </div>
  );
}

export default RenderCount;
