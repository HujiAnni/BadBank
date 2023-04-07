import Card from "./context";
import React from "react";
import { UserContext } from "..";
import Button from "react-bootstrap/Button";

function Deposit() {
  const ctx = React.useContext(UserContext);
  let total = parseFloat(ctx.users[0].balance).toFixed(2);

  // const useEffect = React.useEffect;

  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);

  // useEffect(() => {
  //   console.log(deposit);
  // }, [deposit]);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    if (parseFloat(field) <= 0) {
      setStatus("Please enter a positive number to deposit.");
      alert("Deposit amount cannot be a negative number or zero.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    if (
      isNaN(parseFloat(deposit)) &&
      deposit !== "" &&
      deposit !== " " &&
      deposit !== "-" &&
      deposit !== "." &&
      deposit !== "-."
    ) {
      alert("Please enter numerical values only.");
      setDeposit("");
      setDisabled(true);
      return false;
    }

    return true;
  }

  function handleDeposit() {
    console.log(deposit);
    if (!validate(deposit, status)) return;
    let newDeposit = parseFloat(deposit).toFixed(2);
    console.log(typeof newDeposit);
    let newTotal = parseFloat(
      parseFloat(total) + parseFloat(newDeposit)
    ).toFixed(2);
    console.log(newTotal);
    ctx.users[0].balance = newTotal;
    console.log(ctx.users[0].balance);
    alert("Transaction success.");
    setShow(false);
  }

  function clearForm() {
    setDeposit("");
    setDisabled(true);
    setShow(true);
  }

  return (
    <>
      <br />
      <Card
        bgcolor="primary"
        status={status}
        header="Deposit"
        body={
          show ? (
            <>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  justifyContent: "space-between",
                }}
              >
                <h6>Balance:</h6>
                <h6>${parseFloat(ctx.users[0].balance).toFixed(2)}</h6>
              </div>

              <br />
              <h6 style={{ textAlign: "start" }}>Deposit Amount</h6>
              <input
                type="text"
                className="form-control"
                id="deposit"
                min="0"
                style={{ textAlign: "right", fontSize: "1.2rem" }}
                value={deposit}
                onChange={(e) => {
                  setDeposit(e.currentTarget.value);
                  setDisabled(false);
                }}
              />
              <br />
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  variant="light"
                  type="submit"
                  disabled={disabled}
                  onClick={handleDeposit}
                  style={{ fontSize: "1.2rem" }}
                >
                  Deposit
                </Button>
              </div>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <h6>
                New Balance: ${parseFloat(ctx.users[0].balance).toFixed(2)}
              </h6>
              <br />
              <Button
                type="submit"
                onClick={clearForm}
                variant="light"
                style={{ fontSize: "1.2rem" }}
              >
                Make Another Deposit
              </Button>
            </>
          )
        }
      />
    </>
  );
}

export default Deposit;
