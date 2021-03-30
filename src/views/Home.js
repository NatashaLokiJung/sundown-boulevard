/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "@reach/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
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

  // EMOTION
  const extraMargin = css`
    margin-right: 20px;
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
        <p>loading...</p>
      </>
    ) : (
      <>
        <section className="innerWrapper" css={mediaWrapper}>
          <div className="carouselContainer" css={mediaWrapper}>
            <Carousel
              height={400}
              showThumbs={false}
              showStatus={false}
              interval={8000}
              infiniteLoop={true}
              autoPlay={true}
              showArrows={true}
            >
              <div className="carouselImgContainer">
                <img
                  className="carouselImg"
                  src={data.meals[0].strMealThumb}
                  alt={data.meals[0].strMeal}
                />
              </div>
              <div className="carouselImgContainer">
                <img
                  className="carouselImg"
                  src={data.meals[0].strMealThumb}
                  alt={data.meals[0].strMeal}
                />
              </div>
              <div className="carouselImgContainer">
                <img
                  className="carouselImg"
                  src={data.meals[0].strMealThumb}
                  alt={data.meals[0].strMeal}
                />
              </div>
            </Carousel>
          </div>
          <div className="contentBox" css={mediaWrapper}>
            <h2>Order flow box</h2>
            <Link to="/dishes">
              <button css={mediaWrapper} className="btn">Order</button>
            </Link>
          </div>
        </section>
        <section className="innerWrapper" css={mediaWrapper}>
          <div className="contentBox" css={extraMargin}>
            <h2>Find your order</h2>
            <h3>Enter email:</h3>
            <form>
              <input css={mediaWrapper} className="styledInput" type="email" placeholder="Your email..."/>
            </form>
            <button className="btn" css={mediaWrapper}>Find</button>
          </div>
          <div className="contentBox" css={mediaWrapper}>
            <div>
            <h3>Lorem Ipsum</h3>
            <h3>Dollar Sinar -</h3>
            <h2>Content box</h2></div>
          </div>
        </section>
      </>
    )
  );
};

export default Home;
