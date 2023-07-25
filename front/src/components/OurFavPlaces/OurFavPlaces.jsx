import React from "react";
import { ourFavCardData } from "../../constants/CardsConstants";
import Card from "./FavCardComponent";

const FavoritePlaces = () => {
  const MyRow = () => {
    return (
      <div className="row">
        <div className="section-title text-center" data-aos="fade-left">
          <h2>Our Favourite Places</h2>
        </div>
        <div className="col-lg-12 d-flex align-items-stretch">
          <div className="row">
            {ourFavCardData.map((card, index) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <section id="why-us" className="fav-places">
      <div className="container">
        {MyRow()}
      </div>
    </section>
  );
};

export default FavoritePlaces;
