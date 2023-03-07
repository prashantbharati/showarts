import React, { useState } from "react";

const useInputForm = (input) => {
  const [value, setValue] = useState(input);

  const setInputForm = (inputvalue) => {
    setValue(inputvalue);
  };

  const resetInputForm = () => {
    setValue("");
  };

  return [value, setInputForm, resetInputForm];
};

export default useInputForm;
