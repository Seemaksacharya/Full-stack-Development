import React from "react";
import './LoginForm.css';

function LoginForm() {
  return (
    <div>
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <button>Login</button>
    </div>
  );
}

export default LoginForm;