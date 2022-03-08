import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../css/signup.css";

export default function Signup() {
  const [state, setstate] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function onChangeHandler(e) {
    let name = e.target.name;
    let value = e.target.value;
    setstate({ ...state, [name]: value });
  }
  async function onClickHandler(e) {
    e.preventDefault();
    const { firstname, lastname, email, password } = state;
    console.log(firstname, lastname, email, password);
    if (!email || !password) {
      window.alert("Empty input fields");
    } else {
      await axios
        .post("http://localhost:3000/auth/signup", {
          firstname,
          lastname,
          username: email,
          password
        })
        .then((res) => {
          console.log(res);
          window.alert('Signup successfully')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <form>
      <h1>Signup Form</h1>

      <input
        placeholder="Enter firstname"
        type="text"
        name="firstname"
        onChange={onChangeHandler}
        value={state.firstname}
      ></input>
      <input
        placeholder="Enter lastname"
        name="lastname"
        onChange={onChangeHandler}
        value={state.lastname}
      ></input>
      <input
        placeholder="Enter email"
        type="email"
        name="email"
        onChange={onChangeHandler}
        value={state.email}
      ></input>
      <input
        placeholder="Enter password"
        type="password"
        name="password"
        onChange={onChangeHandler}
        value={state.password}
      ></input>
      <div className="btn">
        <button onClick={onClickHandler}>Signup</button>
        <button>
          <Link to="/">Login</Link>
        </button>
      </div>
    </form>
  );
}
