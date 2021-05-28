import React from "react";
import styled from "styled-components";

import { Grid } from "../elements";

const Input = React.memo((props) => {
  const { line, onChange, onSubmit, placeholder, with_submit, value, type } =
    props;

  if (line < 2) {
    if (with_submit) {
      return (
        <Grid is_flex>
          <Oneline
            //   onChange={(e) => {
            //     onChange(e);
            //   }}
            type={type}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
                e.target.value = "";
              }
            }}
            placeholder={placeholder}
          ></Oneline>
        </Grid>
      );
    }

    return (
      <Oneline
        type={type}
        onChange={(e) => {
          onChange(e);
        }}
        placeholder={placeholder}
      ></Oneline>
    );
  }

  if (value) {
    return (
      <Multiline
        onChange={(e) => {
          onChange(e);
        }}
        placeholder={placeholder}
        rows={line}
        value={value}
      ></Multiline>
    );
  }

  return (
    <Multiline
      onChange={(e) => {
        onChange(e);
      }}
      placeholder={placeholder}
      rows={line}
    ></Multiline>
  );
});

Input.defaultProps = {
  onChange: (e) => {},
  onSubmit: (e) => {},
  line: 1,
  placeholder: "텍스트를 입력해주세요 :)",
  with_submit: null,
  value: null,
  type: "text",
};

const Oneline = styled.input`
  width: 100%;
  padding: 4px 8px;
  margin: 16px 0px;
  border: 1px solid #eeeeee;
  min-height: 32px;
  box-shadow: none;
`;

const Multiline = styled.textarea`
  width: 100%;
  padding: 4px 8px;
  min-height: 20vh;
  margin: 16px 0px;
  box-sizing: border-box;
  border: 1px solid #eeeeee;
`;

export default Input;
