import React, { useEffect, useRef, useState } from "react";
import "./Auth.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
  const [eye, setEye] = useState(true);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fNameRef = useRef("");
  const lNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const { signUpHandler } = useAuth();

  const changeHandler = (e) => {
    switch (e.target.name) {
      case "fName":
        setFName(() => {
          let newValue = e.target.value;
          newValue
            ? fNameRef.current.classList.add("field-label-hover")
            : fNameRef.current.classList.remove("field-label-hover");
          return newValue;
        });
        break;
      case "lName":
        setLName(() => {
          let newValue = e.target.value;
          newValue
            ? lNameRef.current.classList.add("field-label-hover")
            : lNameRef.current.classList.remove("field-label-hover");
          return newValue;
        });
        break;
      case "email":
        setEmail(() => {
          let newValue = e.target.value;
          newValue
            ? emailRef.current.classList.add("field-label-hover")
            : emailRef.current.classList.remove("field-label-hover");
          return newValue;
        });
        break;
      case "password":
        setPassword(() => {
          let newValue = e.target.value;
          newValue
            ? passwordRef.current.classList.add("field-label-hover")
            : passwordRef.current.classList.remove("field-label-hover");
          return newValue;
        });
        break;
      default:
        break;
    }
  };

  const eyeHandler = () => {
    setEye((eye) => !eye);
  };

  return (
    <main className="auth-main">
      <div className="auth-container">
        <form
          className="login signup-form"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            signUpHandler(fName, lName, email, password);
          }}
        >
          <h2 className="auth-page-heading">SignUp</h2>
          <div className="field-container">
            <div className="auth-field-row">
              <div className="field">
                <input
                  className="field-input"
                  required
                  type="text"
                  name="fName"
                  value={fName}
                  id="fName"
                  onChange={(e) => changeHandler(e)}
                />
                <label ref={fNameRef} className="field-label" htmlFor="fName">
                  First Name
                </label>
              </div>
              <div className="field">
                <input
                  className="field-input"
                  required
                  type="text"
                  name="lName"
                  value={lName}
                  id="lName"
                  onChange={(e) => changeHandler(e)}
                />
                <label ref={lNameRef} className="field-label" htmlFor="lName">
                  Last Name
                </label>
              </div>
            </div>
            <div className="field">
              <input
                className="field-input"
                required
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => changeHandler(e)}
              />
              <label ref={emailRef} className="field-label" htmlFor="email">
                Email
              </label>
            </div>

            <div className=" field password-field">
              <input
                className="field-input"
                required
                type={!eye ? "text" : "password"}
                name="password"
                id="password"
                minLength={8}
                value={password}
                onChange={(e) => changeHandler(e)}
              />
              <label
                ref={passwordRef}
                className="field-label"
                htmlFor="password"
              >
                Password
              </label>
              {eye ? (
                <VisibilityOutlinedIcon className="on" onClick={eyeHandler} />
              ) : (
                <VisibilityOffOutlinedIcon
                  className="off"
                  onClick={eyeHandler}
                />
              )}
            </div>
          </div>

          <label htmlFor="remember">
            <input type="checkbox" name="remember" required id="remember" />I
            accept all Terms &amp; Conditions
          </label>
          <button className="btn-auth">SignUp</button>
        </form>
        <p className="redirection">
          Already have an account
          <Link to="/login" className="signUp">
            Login!
          </Link>
        </p>
      </div>
    </main>
  );
};

export { Signup };
