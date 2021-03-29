/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, navigate } from "@reach/router";
import { useState, useEffect } from "react";
import axios from "axios";

const Drinks = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setData(result.data);
      console.log(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

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
  `;
  return (
    isLoading,
    !data ? (
      <>
        <p>loading...</p>
      </>
    ) : (
      <>
        <section className="innerWrapper">
          <div className="contentBox">
            <div className="dishImg">
              <img
                className="carouselImg"
                src={data.meals[0].strMealThumb}
                alt={data.meals[0].strMeal}
              />
            </div>
          </div>
          <div css={asideBox}>
            <div>
              <h3>LOREM LIPSUM</h3>
              <h3> DOLLAR SINAR</h3>
              <h3>PICK SOME</h3>
              <h3>DRINKS NEXT</h3>
            </div>
            <Link to="/drinks">
              <button className="btn">Next</button>
            </Link>
          </div>
        </section>
        <section className="innerWrapper">
          <div className="contentBox">
            <h1>{data.meals[0].strMeal}</h1>

            {data.meals[0].strInstructions}
            <form onSubmit={generateNew}>
              <button className="btn">Generate new</button>
            </form>
          </div>
        </section>
      </>
    )
  );
};

export default Drinks;
