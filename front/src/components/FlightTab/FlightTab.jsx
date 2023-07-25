import React, { useState } from 'react'

function FlightTab() {
    const [activeTab, setActiveTab] = useState("oneway");

    const openCity = (event, tabName) => {
      event.preventDefault();
      setActiveTab(tabName);
    };
  
    return (
      <div>
        <div className="tab">
          <button
            className={`tablinks ${activeTab === "oneway" ? "active" : ""}`}
            onClick={(e) => openCity(e, "oneway")}
          >
            One-Way
          </button>
          <button
            className={`tablinks ${activeTab === "roundtrip" ? "active" : ""}`}
            onClick={(e) => openCity(e, "roundtrip")}
            id="defaultOpen"
          >
            Round-Trip
          </button>
          <button
            className={`tablinks ${activeTab === "multicity" ? "active" : ""}`}
            onClick={(e) => openCity(e, "multicity")}
          >
            Multi-City
          </button>
        </div>
        {activeTab === "oneway" && (
          <div>
            <form>
              <div className="tab-1_form_input1">
                <select id="inputState" className="form-select" required>
                  <option value="" disabled selected>
                    From
                  </option>
                  <option>Islamabad, Pakistan</option>
                  <option>Lahore, Pakistan</option>
                  <option>Faislabad, Pakistan</option>
                  <option>Karachi, Pakistan</option>
                </select>
                <select id="inputState" className="form-select" required>
                  <option value="" disabled selected>
                    To
                  </option>
                  <option>Jeddah</option>
                  <option>Makkah</option>
                  <option>Madinah</option>
                  <option>Riyad</option>
                </select>
                <input
                  type="text"
                  name="text"
                  className="date-picker"
                  placeholder="Depart"
                />
              </div>
              <div className="tab-1_form_input2">
                <div className="d-flex">
                  <input type="checkbox" id="something" />
                  <label htmlFor="something" style={{ marginTop: "5px" }}>
                    Direct Flights Only
                  </label>
                </div>
                <div className="d-flex">
                  <select
                    id="inputState"
                    className="form-select selectFields"
                    required
                  >
                    <option selected>1 Adult</option>
                    <option>2 Adult</option>
                    <option>3 Adult</option>
                  </select>
                </div>
                <div className="d-flex">
                  <select
                    id="inputState"
                    className="form-select selectFields"
                    required
                  >
                    <option selected>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
                <div className="d-flex">
                  <select
                    id="inputState"
                    className="form-select selectFields"
                    required
                  >
                    <option selected>Payment Methods</option>
                    <option>Card Pay</option>
                    <option>Cash</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn-tabSearch"
                  onClick={() => (window.location.href = "flightListing.html")}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        )}
  
        {activeTab === "roundtrip" && (
          <div>
            <form>
              <div className="tab-1_form_input1">
                <select id="inputState" className="form-select" required>
                  <option value="" disabled selected>
                    From
                  </option>
                  <option>Islamabad, Pakistan</option>
                  <option>Lahore, Pakistan</option>
                  <option>Faislabad, Pakistan</option>
                  <option>Karachi, Pakistan</option>
                </select>
                <select id="inputState" className="form-select" required>
                  <option value="" disabled selected>
                    To
                  </option>
                  <option>Jeddah</option>
                  <option>Makkah</option>
                  <option>Madinah</option>
                  <option>Riyad</option>
                </select>
                <input
                  type="text"
                  name="text"
                  className="date-picker"
                  placeholder="Depart"
                />
                <input
                  type="text"
                  name="text"
                  className="date-picker"
                  placeholder="Return"
                />
              </div>
  
              <div className="tab-1_form_input2">
                <div className="d-flex">
                  <input type="checkbox" id="something" />
                  <label htmlFor="something" style={{ marginTop: "5px" }}>
                    Direct Flights Only
                  </label>
                </div>
                <div className="d-flex">
                  <select
                    id="inputState"
                    className="form-select selectFields"
                    required
                  >
                    <option selected>1 Adult</option>
                    <option>2 Adult</option>
                    <option>3 Adult</option>
                  </select>
                </div>
                <div className="d-flex">
                  <select
                    id="inputState"
                    className="form-select selectFields"
                    required
                  >
                    <option selected>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
                <div className="d-flex">
                  <select
                    id="inputState"
                    className="form-select selectFields"
                    required
                  >
                    <option selected>Payment Methods</option>
                    <option>Card Pay</option>
                    <option>Cash</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn-tabSearch"
                  onClick={() => (window.location.href = "flightListing.html")}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        )}
  
        {activeTab === "multicity" && (
          <div>
            <form>
              <div className="tab-1_form_input1">
                <select id="inputState" className="form-select" required>
                  <option value="" disabled selected>
                    From
                  </option>
                  <option>Islamabad, Pakistan</option>
                  <option>Lahore, Pakistan</option>
                  <option>Faislabad, Pakistan</option>
                  <option>Karachi, Pakistan</option>
                </select>
                <select id="inputState" className="form-select" required>
                  <option value="" disabled selected>
                    To
                  </option>
                  <option>Jeddah</option>
                  <option>Makkah</option>
                  <option>Madinah</option>
                  <option>Riyad</option>
                </select>
              </div>
              <div className="tab-1_form_input1">
                <input
                  type="text"
                  name="text"
                  className="date-picker"
                  placeholder="Depart"
                />
                <input
                  type="text"
                  name="text"
                  className="date-picker"
                  placeholder="Return"
                />
              </div>
              <div className="tab-1_form_input2">
                <div className="d-flex">
                  <input type="checkbox" id="something" />
                  <label htmlFor="something" style={{ marginTop: "5px" }}>
                    Direct Flights Only
                  </label>
                </div>
                <div className="d-flex">
                  <select
                    id="inputState"
                    className="form-select selectFields"
                    required
                  >
                    <option selected>1 Adult</option>
                    <option>2 Adult</option>
                    <option>3 Adult</option>
                  </select>
                </div>
                <div className="d-flex">
                  <select
                    id="inputState"
                    className="form-select selectFields"
                    required
                  >
                    <option selected>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
                <div className="d-flex">
                  <select
                    id="inputState"
                    className="form-select selectFields"
                    required
                  >
                    <option selected>Payment Methods</option>
                    <option>Card Pay</option>
                    <option>Cash</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn-tabSearch"
                  onClick={() => (window.location.href = "flightListing.html")}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
}

export default FlightTab