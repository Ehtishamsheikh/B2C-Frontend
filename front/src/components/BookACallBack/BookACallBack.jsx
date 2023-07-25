import React from "react";

const BookCallBack = () => {
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <h2>Request A Call Back</h2>
        </div>
      </section>
      <section
        id="bookNow_details"
        className="bookNow_details portfolio-details"
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  {[1, 2].map((item) => (
                    <div key={item} className="swiper-slide">
                      <img
                        src={`/img/countries/${item}.jpg`}
                        alt=""
                        style={{ height: "550px" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-info">
                <h3>
                  <span style={{ fontWeight: 200, fontSize: "13px" }}>
                    from
                  </span>
                  $43.38
                </h3>
                <p style={{ marginTop: "-20px", fontSize: "13px" }}>
                  Lowest Price Guarantee
                </p>
                <hr></hr>
                <div className="portfolio-info-form">
                  <form style={{ display: "flex", flexDirection: "column" }}>
                    <h3>Contact Information</h3>
                    <div className="portfolio-info-form-input1">
                      <input type="email" name="email" placeholder="Email" />
                      <input type="name" name="name" placeholder="Name" />
                    </div>
                    <div className="portfolio-info-form-input1">
                      <input
                        type="number"
                        name="number"
                        placeholder="Enter your number"
                      />
                      <input
                        type="text"
                        name="package"
                        placeholder="Package you Inquired"
                      />
                    </div>
                    <div className="portfolio-info-form-input1">
                      <select id="inputState" className="form-select" required>
                        <option selected>Deluxe Room</option>
                        <option>Superior Room</option>
                        <option>Two Bed Room Villa - With Garden</option>
                      </select>
                      <select id="inputState" className="form-select" required>
                        <option selected>No. of travellers</option>
                        {[1, 2, 3, 4].map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                    <div className="portfolio-info-form-input1">
                      <input
                        type=""
                        name="date"
                        className="date-picker"
                        placeholder="Select Date"
                      />

                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        style={{
                          width: "4%",
                          padding: "0px",
                          marginRight: "10px",
                          borderRadius: "0px",
                        }}
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Add a Trip
                      </label>
                    </div>
                    <div className="portfolio-info-form-input2 portfolio-info-form-textarea">
                      <textarea
                        rows="4"
                        placeholder="Additional Description"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-requestCall">
                      REQUEST A CALL BACK
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookCallBack;
