import { useState } from "react";
import {loginApi} from "../../../services/userService";
import "./style.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (_) => {
    
  };

  return (
    <div className="container-login">
      <img
        className="logoImg margin"
        src={process.env.PUBLIC_URL + "/img/ono.png"}
        alt="Ono Image"
        style={{ width: "150px" }}
      />

      <div className="title margin">
        <div className="mainTitle">Log in to your account</div>
        <div className="subTitle">Welcome back! Please enter your details</div>
      </div>
      <div className="formLogin margin">
        <form>
          <div className="inputLogin">
            <label htmlFor="input-email">Email address</label>
            <input
              id="input-email"
              type="text"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputLogin">
            <label>Password</label>
            <input
              id="input-password"
              type="password"
              name="pass"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgotPassword">
            <a href="">Forgot password?</a>
          </div>
          <div className="submitLogin center">
            <button
              className={`btnSubmit ${email && password ? "active" : "disable"}`}
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
