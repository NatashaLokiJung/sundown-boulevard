/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

import Burger from "./Burger";
import LogoImg from "../img/beach.png";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  // EMOTION
  const style = css`
    position: absolute;
    right: 0;
  `;

  const styleNav = css`
    display: flex;
    position: fixed;
    justify-content: space-between;
    padding: 0 10%;
    margin-right: 10%;
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid lightgray;
    z-index: 50;
    ${open ? "height:100vh;" : "height:0px;"}

    & .links {
      display: flex;
      justify-content: space-between;
      text-align: center;
      width: 100%;
      padding: 20px 0;
    }

    @media (max-width: 940px) {
      & .links {
        ${open ? "display:flex;" : "display:none;"}
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 100vw;
      }
    }
  `;
  return (
    <nav css={styleNav}>
      <div css={style}>
        <Burger open={open} setOpen={setOpen} />
      </div>
      <div className="links">
        <a href="/" className="navLink">
          <div className="logoImgContainer">
            <img className="logoImg" src={LogoImg} alt="logo" />
          </div>
        </a>
        <a href="/" className="navLink">
          RESTAURANTER
        </a>
        <a href="/" className="navLink">
          PRODUKTER
        </a>
        <a href="/" className="navLink">
          NYHEDSBREV
        </a>
        <a href="/" className="navLink">
          KONTAKT
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
