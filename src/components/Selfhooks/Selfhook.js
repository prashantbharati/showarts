import React, { useState } from "react";

const useToggle = (initialval = true) => {
  const [toggle, setToggle] = useState(true);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, changeToggle];
};

export default useToggle;
