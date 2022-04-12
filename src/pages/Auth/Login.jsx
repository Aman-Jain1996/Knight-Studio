import React, { useEffect, useRef, useState } from "react";
import "./Auth.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useData } from "../../contexts";
import { actionType } from "../../reducers/actionTypes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();

  const { state, dispatch } = useData();
  const { loginHandler, token, user } = useAuth();

  const redirectionPath = location.state?.path || "/explore";

  useEffect(() => {
    if (token) {
      dispatch({
        type: actionType.SET_HISTORY,
        payload: { history: user?.history },
      });

      dispatch({
        type: actionType.SET_LIKES,
        payload: { likes: user?.likes },
      });

      dispatch({
        type: actionType.SET_PLAYLISTS,
        payload: { playlists: user?.playlist },
      });

      dispatch({
        type: actionType.SET_WATCH_LATER,
        payload: { watchlater: user?.watchlater },
      });
    }
  }, [user]);

  const changeHandler = (e) => {
    switch (e.target.name) {
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
          className="login"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler(email, password, redirectionPath);
          }}
        >
          <h2 className="auth-page-heading">Login</h2>
          <div className="field-container">
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
                ref={passwordRef}
                type={eye ? "password" : "text"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => changeHandler(e)}
              />
              {eye ? (
                <VisibilityOutlinedIcon className="on" onClick={eyeHandler} />
              ) : (
                <VisibilityOffOutlinedIcon
                  className="off"
                  onClick={eyeHandler}
                />
              )}
              <label
                ref={passwordRef}
                className="field-label"
                htmlFor="password"
              >
                Password
              </label>
            </div>
          </div>

          <label htmlFor="remember">
            <input type="checkbox" name="remember" id="remember" />
            Remember Me
          </label>
          <button className="btn-auth" type="submit">
            Login
          </button>
        </form>
        <p className="redirection">
          Don't have an account Yet?
          <Link to="/signUp" className="signUp">
            SignUp!
          </Link>
        </p>
        <p className="redirection">
          <Link
            to="/login"
            onClick={(e) => {
              e.preventDefault();
              loginHandler(
                "amanjain@gmail.com",
                "amanjain1234",
                redirectionPath
              );
            }}
            className="signUp guest-credentials"
          >
            Use guest credentials
          </Link>
        </p>
      </div>
    </main>
  );
};

export { Login };
