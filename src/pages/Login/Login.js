import React, { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(false);

  const { isLoggedIn } = useStoreState(state => state);
  const { logIn } = useStoreActions(actions => actions);

  const handleRedirect = () => {
    if (props.location.state) {
      // Redirect the user to the previous page
      props.history.push(props.location.state.from.pathname);
    } else {
      // If user logged in directly from /login route, redirect to homepage
      props.history.push("/");
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoginErr(false);

    const res = await logIn({ email, password });

    if (res) {
      setLoginErr(false);
      handleRedirect();
    } else {
      setLoginErr(true);
    }
  };

  if (isLoggedIn) {
    // If user is logged in when accessing /login route, redirect to homepage
    handleRedirect();
    return null;
  } else {
    return (
      <>
        <h1>login page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="password"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input type="submit" />
        </form>
        <p style={{ color: "red", display: loginErr ? "block" : "none" }}>
          An error occurred, please try again.
        </p>
      </>
    );
  }
};

export default Login;
