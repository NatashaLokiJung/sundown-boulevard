/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

const Burger = ({ open, setOpen }) => {
  // EMOTION
  const styledBurger = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3rem;
    height: 4rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    color: black;
    margin-bottom: 30px;
    right: 0;

    &:focus {
      outline: none;
    }

    @media (min-width: 940px) {
      & .burgerIcon {
        ${open ? "display:flex;" : "display:none;"}
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      & img {
        display: none;
      }
    }
  `;

  return (
    <div css={styledBurger} open={open} onClick={() => setOpen(!open)}>
      <FontAwesomeIcon icon={["fas", "bars"]} className="burgerIcon" />
    </div>
  );
};

export default Burger;
