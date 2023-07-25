import React from 'react'

function HotelTab() {
    return (
        <div id="tab-2" className="tab-content current">
          <h5 className="mb-lg-4">Where do you want to stay ?</h5>
          <form>
            <div className="tab-1_form_input1">
              <select id="inputState" className="form-select" required>
                <option value="" disabled selected>
                  Destination
                </option>
                <option>Islamabad, Pakistan</option>
                <option>Lahore, Pakistan</option>
                <option>Faislabad, Pakistan</option>
                <option>Karachi, Pakistan</option>
              </select>
              <input
                type=""
                name="date"
                className="date-picker"
                placeholder="CheckIn"
              />
              <input
                type=""
                name="date"
                className="date-picker"
                placeholder="CheckOut"
              />
              <select id="inputState" className="form-select" required>
                <option selected>Guests and Rooms</option>
                <option>2 Adult</option>
                <option>3 Adult</option>
              </select>
            </div>
            <div className="tab-1_form_input2">
              <div className="d-flex">
                <input type="checkbox" className="checkboxHotelFlight" />
                <label htmlFor="something" style={{ marginTop: "5px" }}>
                  {" "}
                  Free Cancellation
                </label>
              </div>
              <button
                type="button"
                className="btn-tabSearch"
                onClick={() => {
                  window.location.href = "hotelListing.html";
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      );
}

export default HotelTab