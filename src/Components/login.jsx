import React from "react";
import { UserContext } from "..";

function Login() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h5>Login</h5>
      <br />
      {JSON.stringify(ctx)}
    </>
  );
}

export default Login;
