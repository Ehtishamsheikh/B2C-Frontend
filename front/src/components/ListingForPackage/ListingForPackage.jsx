import React from 'react';
import { useNavigate } from 'react-router-dom';

// Component for the individual listing
const Listing = () => {
  const navigate = useNavigate()
  const openListing = () => {
    // Functionality for opening a listing
  };

  return (
    <div className="col-xl-12 align-items-stretch" data-aos="zoom-in" data-aos-delay="100" onClick={()=>navigate("/package-availability")}>
      <div className="icon-box mt-4 mb-4 mt-xl-0 d-flex" onClick={openListing}>
        <div className="col-lg-4 col-12  list_details_img">
          <img src="img/listing-images/4.jpg" style={{ height: '270px' }} alt="Listing Image" />
        </div>
        <div className="col-lg-7 col-12 list_details_text">
          <h5 className="mt-3">Amsterdam Classic Boat Cruise with Live Guide, Drinks and Cheese</h5>
          <p>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </p>
          <p style={{ fontSize: '12px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p style={{ fontSize: '13px' }}>
            <b>
              <i className="fa-regular fa-clock"></i> 1 Hour
            </b>
          </p>
          <p style={{ fontSize: '13px' }}>
            <b>
              <i className="fa-solid fa-check"></i> Free Cancellation
            </b>
          </p>
        </div>
        <div className="col-lg-1 col-12 list_details_price">
          <p>from</p>
          <h4>
            <strong>$35.70</strong>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Listing;