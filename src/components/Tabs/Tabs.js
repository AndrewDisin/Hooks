import React, { useState, useEffect } from 'react';
import './Tabs.css';

function Tabs() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/?_limit=2`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log('Clin type!');
    };
  }, [type]);

  useEffect(() => {
    console.log('ComponentDidMount here!');

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  const setUsersType = () => {
    setType('users');
  };

  const setTodosType = () => {
    setType('todos');
  };

  const setPostsType = () => {
    setType('posts');
  };

  return (
    <div className="tabs">
      <h3>useEffect</h3>
      <h2 className="tabs__title">Ресурс: {type}</h2>
      <div className="tabs__buttons">
        <button onClick={setUsersType}>Пользователи</button>
        <button onClick={setTodosType}>Todos</button>
        <button onClick={setPostsType}>Посты</button>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default Tabs;
