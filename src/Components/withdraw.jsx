import Card from "./context";
import React from "react";
import { UserContext } from "..";
import Button from "react-bootstrap/Button";

function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);

  const ctx = React.useContext(UserContext);
  let total = parseFloat(ctx.users[0].balance).toFixed(2);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    if (parseFloat(field) <= 0) {
      setStatus("Please enter a positive number to withdraw.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (parseFloat(field) > total) {
      setStatus("No sufficient amount. Please try again.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (
      isNaN(parseFloat(withdraw)) &&
      withdraw !== "" &&
      withdraw !== " " &&
      withdraw !== "-" &&
      withdraw !== "." &&
      withdraw !== "-."
    ) {
      alert("Please enter numerical values only.");
      setWithdraw("");
      setDisabled(true);
      return false;
    }

    return true;
  }

  function handleWithdraw() {
    console.log(withdraw);
    if (!validate(withdraw, status)) return;
    let newWithdraw = parseFloat(withdraw).toFixed(2);
    let newTotal = parseFloat(total - newWithdraw).toFixed(2);
    console.log(newTotal);
    ctx.users[0].balance = newTotal;
    console.log(ctx.users[0].balance);
    alert("Transaction success.");
    setShow(false);
  }

  function clearForm() {
    setWithdraw("");
    setDisabled(true);
    setShow(true);
  }

  return (
    <>
      <h3>Withdraw</h3>
      <br />
      <Card
        bgcolor="info"
        status={status}
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
                <h5>Balance:</h5>
                <h5 style={{ textAlign: "right" }}>
                  ${parseFloat(ctx.users[0].balance).toFixed(2)}
                </h5>
              </div>

              <br />
              <h5>Withdraw Amount</h5>
              <input
                type="text"
                className="form-control"
                id="withdraw"
                min="0"
                style={{ textAlign: "right", fontSize: "1.2rem" }}
                value={withdraw}
                onChange={(e) => {
                  setWithdraw(e.currentTarget.value);
                  setDisabled(false);
                }}
              />
              <br />
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  variant="light"
                  type="submit"
                  disabled={disabled}
                  onClick={handleWithdraw}
                  style={{ fontSize: "1.2rem" }}
                >
                  Withdraw
                </Button>
              </div>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <h5>
                New Balance: ${parseFloat(ctx.users[0].balance).toFixed(2)}
              </h5>
              <br />
              <Button
                type="submit"
                onClick={clearForm}
                variant="light"
                style={{ fontSize: "1.2rem" }}
              >
                Make Another Withdrawal
              </Button>
            </>
          )
        }
      />
    </>
  );
}

export default Withdraw;
