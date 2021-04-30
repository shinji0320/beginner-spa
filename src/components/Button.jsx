import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TestButton = styled.button`
  padding: 30px;
  margin: 50px;
`;

const Button = () => {
  const handleClick = () => {
    // e.preventDefault();
    console.log("クリック");
  };
  const handleAlert = () => {
    // e.preventDefault();
    alert("アラートの確認");
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <TestButton onClick={handleClick}>クリック</TestButton>
      <TestButton onClick={handleAlert}>アラート</TestButton>
    </div>
  );
};

export default Button;
