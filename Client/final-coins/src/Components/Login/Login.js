import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginFetch } from "../../redux/actions";
import { LoginMain, LoginBlock, LoginConfirm } from "./LoginStyle";
import Header from "../Header/header";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [active, setActive] = useState(true);
  useEffect(() => {
    localStorage.clear();
  }, []);
  const loginHandler = () => {
    if (login !== "" && pass !== "") {
      props.dispatch(loginFetch(login, pass)).then(res => {
        if(res===401){
          setLoggedIn(true);
          setActive(false);
        }
        else {
          setLoggedIn(true);
          setActive(true);
        }
      });
    } else {
      setLoggedIn(false);
      alert("Please fill in all fields!");
    }
  };
  const validHandler = () =>{
    if(!active) setLoggedIn(false);
  }
  return (
    <LoginMain>
      <Header />
      <LoginBlock>
        {!loggedIn ? (
          [
            <label key={"login"}>
              <p>Login</p>
              <input
                type="text"
                onChange={(e) => setLogin(e.target.value)}
                value={login}
              />
            </label>,
            <label key={"password"}>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                autoComplete="new-password"
              />
            </label>,
            <button onClick={loginHandler} key={"signInButton"}>
              Sign in
            </button>,
            <p className={"register"} key={"register"}>
              There is no Account? <Link to={"/registration"}>Registration</Link>
            </p>,
          ]
        ) : active?(
          <LoginConfirm>
            <img
              src="https://image.flaticon.com/icons/svg/845/845646.svg"
              alt="success"
            />
            <p>You Are successfully authorized</p>
            <Link to={{
              pathname:'/',
            }}>OK</Link>
          </LoginConfirm>
        ):
            <LoginConfirm>
              <img
                  src="https://image.flaticon.com/icons/svg/752/752755.svg"
                  alt="fail"
              />
              <p>Username or password you entered is incorrect.</p>
              <Link to={{
                pathname:'/login',
              }}
              onClick={validHandler}
              >OK</Link>
            </LoginConfirm>
        }
      </LoginBlock>
    </LoginMain>
  );
};
const mapStateToProps = (state) => {
  return {
    username: state.user.user,
  };
};
export default connect(mapStateToProps)(Login);
