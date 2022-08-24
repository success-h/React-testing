import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <form>
        <h1>{user.name}</h1>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          value={password}
        />
        <button disabled={!username || !password} onClick={handleClick}>
          {loading ? "Please wait" : "Login"}
        </button>
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
