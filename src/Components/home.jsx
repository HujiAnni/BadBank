import bankimg from "../bank.png";
import Context from "./context";

function Home() {
  return (
    <Context
      txtcolor="black"
      style={{ border: "none", maxWidth: "24rem" }}
      header="WELCOME TO THE BANK"
      text="For all your banking needs"
      img={bankimg}
    ></Context>
  );
}

export default Home;
