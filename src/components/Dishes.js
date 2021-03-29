import { useEffect, useState } from "react";

const Dishes = () => {
  const [dishes, setDishes] = useState();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setDishes(result);
      });
  }, []);

  console.log(dishes);
  return (
    <>
      <p>Dishes</p>
    </>
  );
};

export default Dishes;