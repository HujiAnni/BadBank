import Card from "./context";
import bankimg from "../bank.png";

function Home() {
  return (
    <Card
      txtcolor="black"
      title="WELCOME TO THE BANK"
      text="For all your banking needs"
      img={bankimg}
    />
  );
}

export default Home;
