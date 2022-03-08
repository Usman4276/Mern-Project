import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../css/login.css";

export default function Login() {
  const [state, setstate] = useState({
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
    const { email, password } = state;
    console.log(state)
    if (!email || !password) {
      window.alert("Empty input fields");
    } else {
      await axios
        .post("http://localhost:3000/auth/login", {
          username: email,
          password: password,
        })
        .then((res) => {
          window.alert('you are successfully logged in ')
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <form>
      <h1>Login Form</h1>

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
        <button onClick={onClickHandler}>Login</button>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </form>
  );
}
