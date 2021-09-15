import React from 'react';
import './Alert.css';
import { useAlert } from './AlertContext';

export default function Alert() {
  const isAlertShow = useAlert();

  if (isAlertShow.visible) return null;

  return (
    <div className="alert" onClick={isAlertShow.toggle}>
      <p>Important message</p>
    </div>
  );
}
