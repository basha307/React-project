import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login} from "./Store";

function Login() {
  let username = useRef(null);
  let password = useRef(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let LoginCheck = () => {
    if (username.current.value === "Irfan Basha" && password.current.value === "Basha") {
      dispatch(login(username.current.value));
      navigate("/home");
    } else {
      window.alert("Your credentials are wrong. Please check again!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 rounded" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center text-primary mb-4">Login Form</h2>
        
        <div className="mb-3">
          <label htmlFor="username" className="form-label text-warning">
            Username
          </label>
          <input
            type="text"
            ref={username}
            className="form-control"
            id="username"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label text-warning">
            Password
          </label>
          <input
            type="password"
            ref={password}
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="d-grid gap-2">
          <button onClick={LoginCheck} className="btn btn-warning btn-lg">
            Login
          </button>
        </div>

        <p className="text-center mt-3 text-muted">
          New here? <a href="/signup" className="text-primary">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
