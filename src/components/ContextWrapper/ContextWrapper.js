import React from 'react';
import Main from './Main/Main';
import Alert from './Alert/Alert';
import { AlertProvider } from './Alert/AlertContext';
import './ContexWrapper.css';

export default function ContextWrapper() {
  return (
    <AlertProvider>
      <div className="context-wrapper">
        <h3>useContext / useReducer</h3>
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
}
