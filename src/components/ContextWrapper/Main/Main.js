import React from 'react';
import { useAlert } from '../Alert/AlertContext';

export default function Main() {
  const { showAlert } = useAlert();

  return (
    <>
      <h2>Hi from Context</h2>
      <button onClick={() => showAlert('VERY very Important Text!')}>
        Show alert
      </button>
    </>
  );
}
