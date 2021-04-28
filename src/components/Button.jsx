import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = () => {
  const handleClick = () => {
    // e.preventDefault();
    console.log("クリック");
  };
  const handleAlert = () => {
    // e.preventDefault();
    alert("アラートの確認")
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleAlert}>ボタン</button>
    </div>
  );
};

export default Button;
