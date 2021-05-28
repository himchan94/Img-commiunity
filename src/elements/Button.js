import React from "react";
import styled from "styled-components";

// import { history } from "../redux/configureStore";

const Button = (props) => {
  const { is_float, __click } = props;

  if (is_float) {
    return (
      <FloatBtn
        onClick={() => {
          // history.push("/write");
        }}
      >
        {props.children}
      </FloatBtn>
    );
  }

  if (__click) {
    return (
      <StyledBtn
        {...props}
        onClick={() => {
          __click();
        }}
      >
        {props.children}
      </StyledBtn>
    );
  }

  return (
    <StyledBtn disabled {...props}>
      {props.children}
    </StyledBtn>
  );
};

Button.defaultProps = {
  __click: null,
  round: false,
};

const FloatBtn = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  box-shadow: 1px 3px 10px #393e4655;
  background-color: #ffd369;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBtn = styled.button`
  border: none;
  margin: 2px;
  padding: 4px 16px;
  // background-color: #4f8a8b55;
  background-color: #3f51b5;
  color: #fff;
  ${(props) => (props.round ? "border-radius: 16px;" : "")}
`;

export default Button;
