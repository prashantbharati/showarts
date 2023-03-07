import React, { useState } from "react";
import HappyBox from "./Happybox";
import useToggle from "./Selfhook";
const Happy = () => {
  const [happy, setHappy] = useToggle(true);

  return (
    <div>
      {happy && <HappyBox />}

      <button onClick={() => setHappy()}>Toggle</button>
    </div>
  );
};

export default Happy;
