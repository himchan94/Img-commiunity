// shared/Search.js
import React from "react";
import _ from "lodash"; // lodash 부르기

const Search = () => {
  const [text, setText] = React.useState("");

  const debounce = _.debounce(
    (e) => console.log("디바운스! :::", e.target.value),
    1000
  );
  const throttle = _.throttle(
    (e) => console.log("쓰로틀! :::", e.target.value),
    1000
  );
  const keyPress = React.useCallback(debounce, []);
  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
    keyPress(e);
  };

  return (
    <div>
      <label>Search:</label>
      <input onChange={onChange} value={text} />
    </div>
  );
};

export default Search;
