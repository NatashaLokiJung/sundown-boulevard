/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import UserContextProvider from "./contexts/UserContext";

import { Router } from "@reach/router";
import Home from "./views/Home";
import Navigation from "./components/navigation";
import Drinks from "./components/Drinks";
import Dishes from "./components/Dishes";
import YourOrder from "./components/YourOrder";
import YourReceipt from "./components/YourReceipt";

function App() {
  const mediaWrapper = css`
  @media (max-width: 940px) {
    margin: 55px 20px 20px 20px;
  }`;

  return (
    <UserContextProvider>
    <section className="wrapper" css={mediaWrapper}>
      <Navigation />
      <Router>
        <Home path="/" />
        <Drinks path="/drinks" />
        <Dishes path="/dishes" />
        <YourOrder path="/order" />
        <YourReceipt path="/receipt" />
      </Router>
    </section>
    </UserContextProvider>
  );
}

export default App;
