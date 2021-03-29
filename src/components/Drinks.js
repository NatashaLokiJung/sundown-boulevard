/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "@reach/router";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Drinks = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios("https://api.punkapi.com/v2/beers");
      setData(result.data);
      console.log(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

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
          <div className="cardContainer">
            {data.map((item) => (
              <div key={item.id} className="cardBox">
                <img className="cardImg" src={item.image_url} alt={item.name} />
                <h4 className="cardTitle">{item.name}</h4>
              </div>
            ))}
          </div>
          <div css={asideBox}>
            <div>
              <h3>next Pick date </h3>
              <h3>and amount</h3>
            </div>
            <Link to="/drinks">
              <button className="btn">Next</button>
            </Link>
          </div>
        </section>
      </>
    )
  );
};

export default Drinks;
