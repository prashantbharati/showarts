import React, { useState } from "react";
function Form(props) {
  const [name, setname] = useState("");
  const [count, setcount] = useState(0);
  const [img, setimg] = useState("");
  const [detail, setdetail] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log("reached handlesubmit ");
    console.log(name);
    console.log(count);
    console.log(img);
    console.log(detail);

    console.log(event);
    props.setProduct([
      ...props.product,
      {
        name: name,
        count: count,
        img: img,
        detail: detail,
      },
    ]);
    console.log(props.product);
  };

  const handlenamechange = (event) => {
    setname(event.target.value);
  };

  const handlecountchange = (event) => {
    setcount(event.target.value);
  };

  const handledetailchange = (event) => {
    setdetail(event.target.value);
  };

  const handleimagechange = (event) => {
    setimg(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "50vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ border: "2px solid grey" }}>
        <form style={{ padding: "10px" }} onSubmit={handlesubmit}>
          <div>
            <label> Name</label>
            <input type="text" onChange={handlenamechange}></input>
          </div>

          <div>
            <label>Count</label>
            <input type="text" onChange={handlecountchange}></input>
          </div>

          <div>
            <label>Details</label>
            <input type="text" onChange={handledetailchange}></input>
          </div>
          <div>
            <label>Image</label>
            <input type="text" onChange={handleimagechange}></input>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
