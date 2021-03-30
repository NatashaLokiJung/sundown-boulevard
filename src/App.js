import { Router } from "@reach/router";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import Drinks from "./components/Drinks";
import Dishes from "./components/Dishes";
import YourOrder from "./components/YourOrder";
import YourReceipt from "./components/YourReceipt";

function App() {
  return (
    <section className="wrapper">
      <Navigation />
      <Router>
        <Home path="/" />
        <Drinks path="/drinks" />
        <Dishes path="/dishes" />
        <YourOrder path="/order" />
        <YourReceipt path="/receipt" />
      </Router>
    </section>
  );
}

export default App;
