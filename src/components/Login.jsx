import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState({
    error: false,
    username: "",
    password: "",
  });

  const { username, password, error } = state;

  return (
    <div>
      <form>
        <input placeholder="username" value={username} type="text" />
        <input type="password" placeholder="password" value={password} />
        <button disabled="true">Login</button>
        <span
          data-testid="error"
          style={{
            visibility: error ? "visible" : "hidden",
          }}
        >
          something went wrong
        </span>
      </form>
    </div>
  );
};

export default Login;
