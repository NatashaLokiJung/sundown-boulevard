import Calender from "./Calender";

const YourOrder = () => {
  return (
    <section className="contentBox">
      <h2>Your Order</h2>
      <Calender />
      <form>
        <h3>Enter email:</h3>
        <input type="email" />
        <button className="btn">Order</button>
      </form>
    </section>
  );
};

export default YourOrder;
