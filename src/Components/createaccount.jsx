import React, { useContext } from "react";
import Card from "./context";
import { UserContext } from "..";
import Button from "react-bootstrap/Button";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    alert("Successfully Created Account");
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <>
      <h3>Create Account</h3>
      <br />
      <Card
        bgcolor="dark"
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              <br />
              <h5 style={{ textAlign: "start" }}>Name</h5>
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <br />
              <h5 style={{ textAlign: "start" }}>Email address</h5>
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              <h5 style={{ textAlign: "start" }}>Password</h5>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <Button type="submit" onClick={handleCreate} variant="secondary">
                Create Account
              </Button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <br />
              <Button type="submit" variant="secondary" onClick={clearForm}>
                Add another account
              </Button>
            </>
          )
        }
      />
    </>
  );
}

export default CreateAccount;
