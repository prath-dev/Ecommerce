
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../../Context/authcontext";
import { Navabar } from "../../components/Navbar/Navabar";

const LoginPage = () => {
  const { setAuth } = useAuthContext();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const [passwordShow, setPasswordShow] = useState({
    passwordOne: false,
  });

  const [error, setError] = useState({
    errorStatus: false,
    messege: "",
  });

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      });

      localStorage.setItem("TOKEN", response.data.encodedToken);

      localStorage.setItem(
        "USER_INFO",
        JSON.stringify({
          firstname: response.data.foundUser.firstname,
          lastname: response.data.foundUser.lastname,
          email: response.data.foundUser.email,
        })
      );

      setAuth({
        loginStatus: true,
        token: response.data.encodedToken,
        user: {
          firstname: response.data.foundUser.firstname,
          lastname: response.data.foundUser.lastname,
          email: response.data.foundUser.email,
        },
      });

      navigate("/");
    } catch (error) {
      if (error.response.status === 401) {
        setError({
          errorStatus: true,
          messege: "Password is wrong",
        });
      } else if (error.response.status === 404) {
        setError({
          errorStatus: true,
          messege: "Email doen't exist",
        });
      }
    }
  };

  const loginSubmiter = (e) => {
    e.preventDefault();

    loginUser();
  };

  const loginAsGuest = () => {
    setLoginInfo({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });

    loginUser();
  };

  return (
    <>
    <Navabar></Navabar>
    <form onSubmit={loginSubmiter} className="login">
      <div className="login-text">Login</div>
      <div className="inputs-outerbox">
        <label className="lab-email" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          placeholder="Jhondoe@gmail.com"
          className="login-input"
          id="email"
          value={loginInfo.email}
          required
          onChange={(e) =>
            setLoginInfo((item) => ({ ...item, email: e.target.value }))
          }
        />
      </div>
      <div className="inputs-outerbox">
        <label className="lab-email" htmlFor="password">
          Password
        </label>
        <input
          type={passwordShow.passwordOne ? "text" : "password"}
          placeholder="************"
          className="login-input"
          id="password"
          value={loginInfo.password}
          required
          minLength="6"
          onChange={(e) => {
            setLoginInfo((item) => ({ ...item, password: e.target.value }));
            error.errorStatus = false;
          }}
        />
        <span className="password-eye">
          {passwordShow.passwordOne ? (
            <i
              className="fas fa-eye"
              onClick={() =>
                setPasswordShow((item) => ({
                  ...item,
                  passwordOne: false,
                }))
              }
            ></i>
          ) : (
            <i
              className="fas fa-eye-slash"
              onClick={() =>
                setPasswordShow((item) => ({
                  ...item,
                  passwordOne: true,
                }))
              }
            ></i>
          )}
        </span>
      </div>

      {error.errorStatus ? (
        <div className="password-dont-match">
          <i className="fas fa-exclamation-triangle"></i>
          &nbsp; {error.messege}
        </div>
      ) : null}

      <div className="logins-outerbox">
        <button type="submit" className="simple-login">
          Login
        </button>
        <button className="guest-login" onClick={() => loginAsGuest()}>
          Login as guest
        </button>
      </div>

      <div className="dont-acc-outerbox">
        <div className="dont-acc">Don't have account yet ?</div>
        <Link to="/Signup" className="sign-up-anchor">
          &nbsp; Sign-up
        </Link>
      </div>
    </form>
    </>
  );
};

export { LoginPage };
