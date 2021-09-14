import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const computeInitialCounter = () => {
    console.log('Some calculations');
    return Math.trunc(Math.random() * 20);
  };

  //Что бы не пересчитывать при каждом перерендоривании начальное свойства для useState (заданное вычисляемой функцией computeInitialCounter)...
  //...используется call-back функция, котора пересчитается лишь раз при первом рендере компонента
  const [counterValue, setCounterValue] = useState(() =>
    computeInitialCounter()
  );

  const incrValue = () => {
    setCounterValue(counterValue + 1);
  };

  const decrValue = () => {
    setCounterValue(counterValue - 1);
  };

  // Для борьбы с асинхронностью работы setState используется call-back функция
  const doubleIncrValue = () => {
    setCounterValue((prevState) => prevState + 1);
    setCounterValue((prevState) => prevState + 1);
  };

  // Чтобы не перезваисывать полностью объект стейта, а менять только нужные поля используется call-back функция и в ней возвращается старый объект + новое поле
  const setStateForObjectState = () =>
    setState((prewState) => {
      return {
        ...prewState,
        title: 'New title',
      };
    });

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now(),
  });

  return (
    <div className="counter">
      <h3>useState</h3>
      <h2 className="counter__value">{counterValue || 0}</h2>
      <button
        className="counter__button counter__button_incr"
        onClick={incrValue}
      >
        Добавить
      </button>
      <button
        className="counter__button counter__button_incr"
        onClick={doubleIncrValue}
      >
        Добавить x2
      </button>
      <button
        className="counter__button counter__button_decr"
        onClick={decrValue}
      >
        Убрать
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={setStateForObjectState}>Изменить title</button>
    </div>
  );
}

export default Counter;
