import React from 'react';
import { useAlert } from '../Alert/AlertContext';

export default function Main() {
  const { toggle } = useAlert();

  return (
    <>
      <h2>Hi from Context</h2>
      <button onClick={toggle}>Show alert</button>
    </>
  );
}
