import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "./AdminLoginPage.css";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Admin logged in successfully.");
      navigate("/Admin ");
    }
  };
  const validate = () => {
    const error = {};

    if (!username) {
      error.username = "Username is Required";
    } else if (username !== "SPMVV") {
      error.username = "Username is Incorrect";
    }
    if (!password) {
      error.password = "Password is Required";
    } else if (password !== "SPMVVMCA") {
      error.password = "Password is Incorrect";
    }

    return error;
  };

  return (
    <div className="AdminLoginPage">
      <form>
        <h1>Admin Login ?</h1>
        <div className="input-box">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            // required
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div className="input-box">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            // required
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
