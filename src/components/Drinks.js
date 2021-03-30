/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "@reach/router";
import { useState, useEffect } from "react";
import axios from "axios";

const Drinks = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

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

  const mediaWrapperImg = css`
  @media (max-width: 940px) {
  height: 100%;
  }`;

  const borderSelected = css`
    ${isSelected ? "border: 4px solid red;" : "border: 2px solid black;"}
    @media (max-width: 940px) {
      width: 100%;
      }
  `;

  return (
    isLoading,
    !data ? (
      <>
        <p>loading...</p>
      </>
    ) : (
      <>
        <section className="innerWrapper" css={mediaWrapper}>
          <div className="cardContainer" css={mediaWrapper}>
            {data.map((item) => (
              <div
                key={item.id}
                className="cardBox"
                css={borderSelected}
                onClick={() => setIsSelected(!isSelected)}
              >
                <img className="cardImg" css={mediaWrapperImg} src={item.image_url} alt={item.name} />
                <h4 className="cardTitle">{item.name}</h4>
              </div>
            ))}
          </div>
          <div css={asideBox}>
            <div>
              <h3>next pick date </h3>
              <h3>and amount</h3>
            </div>
            <Link to="/order">
              <button className="btn" css={mediaWrapper}>Next</button>
            </Link>
          </div>
        </section>
      </>
    )
  );
};

export default Drinks;
