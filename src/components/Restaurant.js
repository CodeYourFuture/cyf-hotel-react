import React from "react";
import Order from "./Order";
import "../style/restaurant.scss";

const Restaurant = () => {
  const randomPrice = () => Math.floor(Math.random() * 25);
  return (
    <div className="order-content container" id="order">
      <h3>Order Form</h3>
      <ul>
        <Order
          orderType={"Lazagna"}
          imgSrc={
            "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg"
          }
          randomPrice={randomPrice()}
        />
        <Order
          orderType={"Salad"}
          imgSrc={
            "https://assets.nhs.uk/campaigns-cms-prod/images/6.-Greek-style-salad.width-320.jpg"
          }
          randomPrice={randomPrice()}
        />
        <Order
          orderType={"Pizzas"}
          imgSrc={
            "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
          }
          randomPrice={randomPrice()}
        />
        <Order
          orderType={"Tomato soup"}
          imgSrc={
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1074500_11-4325965.jpg?quality=90&webp=true&resize=300,272"
          }
          randomPrice={randomPrice()}
        />
        <Order
          orderType={"Cinnamon Rolls"}
          imgSrc={
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F16%2F20156-Clone-Of-A-Cinnabon-mfs_001.jpg"
          }
          randomPrice={randomPrice()}
        />
        <Order
          orderType={"Cinnamon Rolls"}
          imgSrc={
            "https://letthebakingbegin.com/wp-content/uploads/2013/07/The-Best-Napoleon-Cake-is-made-with-thin-puff-pastry-layers-then-sandwiched-with-rich-and-buttery-custard.-This-Napoleon-dessert-is-one-of-my-familys-favorite-2-500x500.jpg"
          }
          randomPrice={randomPrice()}
        />
      </ul>
    </div>
  );
};

export default Restaurant;
