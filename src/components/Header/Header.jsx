import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <header>
      <h1>Redux Toolkit Counter</h1>
      <p>Count: {count}</p>
    </header>
  );
};

export default Header;
