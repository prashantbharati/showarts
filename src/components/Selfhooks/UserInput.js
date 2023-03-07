import React, { useState, useRef } from "react";
import useForminput from "./Customusestate";
const UserInput = () => {
  const [username, setUsername, resetUsername] = useForminput("");
  const [password, setPassword, resetPassword] = useForminput("");
  const emailref = useRef();
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(emailref.current.value);
    resetUsername();
    resetPassword();
    emailref.current.value = "";
  };

  const handleusername = (event) => {
    setUsername(event.target.value);
  };

  const handlepassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>Username</label>
        <input onChange={handleusername} value={username} type="text"></input>
        <label>Password</label>
        <input onChange={handlepassword} value={password} type="number"></input>

        <label placeholder="email">Email</label>
        <input type="text" ref={emailref}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInput;
