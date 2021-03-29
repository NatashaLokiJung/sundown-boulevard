import { Router } from "@reach/router";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import Drinks from "./components/Drinks";
import Dishes from "./components/Dishes";

function App() {
  return (
    <section className="wrapper">
      <Navigation />
      <Router>
        <Home path="/" />
        <Drinks path="/drinks" />
        <Dishes path="/dishes" />
      </Router>
    </section>
  );
}

export default App;
