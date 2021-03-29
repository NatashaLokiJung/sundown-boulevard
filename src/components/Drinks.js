import { useEffect, useState } from "react";

const Drinks = () => {
  const [drinks, setDrinks] = useState();
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setDrinks(result);
      });

    console.log(drinks);
  }, []);

  return (
    <>
      <p>Drinks</p>
    </>
  );
};

export default Drinks;
