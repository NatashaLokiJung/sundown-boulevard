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

  return (
    isLoading,
    !data ? (
      <>
        <p>loading...</p>
      </>
    ) : (
      <>
        <div>
          <p>hej</p>
        </div>
        {data.map((item) => (
          <div key={item.id}>
            <h5>{item.name}</h5>
          </div>
        ))}
      </>
    )
  );
};

export default Drinks;
