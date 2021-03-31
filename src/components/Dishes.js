/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {  navigate } from "@reach/router";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
// import UserContext from "../contexts/UserContext";

const Drinks = ({id}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const [signUp] = useState("");
  // const { token } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // const pickMeal = (e) => {
  //   e.preventDefault();
  //   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: `${signUp}`,
  //   })
  //     .then((response) => {
  //       setTimeout(() => {
  //         navigate("/drinks");
  //       }, 2500);
  //     })
  //     .catch((err) => console.error(err));
  // };

  const generateNew = (e) => {
    navigate("/dishes");
  };

  //EMOTION
  const asideBox = css`
    width: 25vw;
    height: 300px;
    border: 2px solid var(--dark);
    padding: 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 940px) {
      flex-direction: column;
      justify-content: center;
      margin: 10px 0 0 0;
      width: 100%;
    }
  `;

  const mediaWrapper = css`
  @media (max-width: 940px) {
    flex-direction: column;
    justify-content: center;
    margin: 10px 0 0 0;
    width: 100%;
  }`;

  return (
    isLoading,
    !data ? (
      <>
        <p>Loading...</p>
      </>
    ) : (
      <>
        <section className="innerWrapper" css={mediaWrapper}>
          <div className="contentBox" css={mediaWrapper}>
            <div className="dishImg">
              <img
                className="carouselImg"
                src={data.meals[0].strMealThumb}
                alt={data.meals[0].strMeal}
              />
            </div>
          </div>
          <div css={asideBox}>
            <div css={mediaWrapper}>
              <h3>LOREM LIPSUM</h3>
              <h3>DOLLAR SINAR</h3>
              <h3>PICK SOME</h3>
              <h3>DRINKS NEXT</h3>
            </div>
              <form action="/drinks"
              // onSubmit={pickMeal}
              >
              <button className="btn" css={mediaWrapper}>Next</button>
              </form>
          </div>
        </section>
        <section className="innerWrapper" css={mediaWrapper}>
          <div className="contentBox" css={mediaWrapper}>
            <h1>{data.meals[0].strMeal}</h1>
            {data.meals[0].strInstructions}
            <form onSubmit={generateNew}>
              <button className="btn" css={mediaWrapper}>Generate new</button>
            </form>
          </div>
        </section>
      </>
    )
  );
};

export default Drinks;
