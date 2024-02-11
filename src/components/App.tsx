import { useState } from 'react';
import css from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  const stringLog = (str: string) => {
    console.log(str);
  };

  stringLog('7');

  return (
    <div className={css.container}>
      <p>App111</p>
      <Link to={`/`}>main</Link> <br />
      <Link to={`/about`}>about</Link> <br />
      <Link to={`/shop`}>shop</Link>
      <Outlet />
    </div>
  );
};

export default App;
