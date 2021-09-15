import React, { useEffect, useState } from 'react';
import './CustomHooks.css';

function useLogger(value) {
  useEffect(() => {
    console.log(`Value changed: ${value}`);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue('');
  };

  return {
    bind: {
      value,
      onChange,
    },
    clear,
  };
}

export default function CustomHooks() {
  const input = useInput('');

  useLogger(input.value);

  return (
    <div className="custom-hooks">
      <h3>customHooks</h3>
      <h2>Custom Hooks</h2>
      <h4 className="custom-hooks__title">Name: {input.bind.value}</h4>
      <input {...input.bind} />
      <button onClick={input.clear}>Clear input</button>
    </div>
  );
}
