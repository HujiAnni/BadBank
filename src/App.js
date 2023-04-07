import "./App.css";
import { UserContext } from ".";

import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./Components/navbar";
import Home from "./Components/home";
import Withdraw from "./Components/withdraw";
import CreateAccount from "./Components/createaccount";
import Deposit from "./Components/deposit";
import AllData from "./Components/alldata";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Jianni Hu",
              email: "jh2585@cornell.edu",
              password: "secret",
              balance: 500.0,
            },
          ],
        }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
