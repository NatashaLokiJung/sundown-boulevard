import React, { useState, useEffect } from "react";
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

  return (
    isLoading,
    !data ? (
      <>
        <p>loading...</p>
      </>
    ) : (
      <>
        <div>
          <h2>Title:</h2>
          {data.meals[0].strMeal}
        </div>
        <div>{data.meals[0].strInstructions}</div>
      </>
    )
  );
};

export default Drinks;
