import React from "react";

const Card = ({ colSize, imgSrc, title, ratings, price, duration, location }) => {
    return (
      <div className={`col-lg-${colSize} col-md-6 mt-4 mt-lg-0`} data-aos="fade-up" data-aos-delay="100">
        <div className="card">
          <div className="card-img">
            <img src={imgSrc} alt="" className="img-fluid" />
          </div>
          <h3><a href="#" className="stretched-link">{title}</a></h3>
          <p>
            {ratings.map((rating, index) => (
              <i key={index} className={rating}></i>
            ))}
          </p>
          <p>Starting from <strong>{price}</strong></p>
          <p className="fav-places-btn1"><i className="fa-solid fa-clock"></i> <span>{duration}</span> <i className="fa-solid fa-plane"></i> {location}</p>
        </div>
      </div>
    );
  };

export default Card;
