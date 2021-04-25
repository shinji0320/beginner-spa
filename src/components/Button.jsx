import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Button = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <button>ボタン</button>
    </div>
  );
};

export default Button;
