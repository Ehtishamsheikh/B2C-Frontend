import React, { useState } from "react";
import FlightTab from "../../../../components/FlightTab/FlightTab";
import HotelTab from "../../../../components/HotelTab/HotelTab";
import Activitiestab from "../../../../components/ActivitiesTab/Activitiestab";

const HeroSection = () => {
  const [currentTab, setCurrentTab] = useState("tab-1");

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <section id="hotel_hero" className="d-flex align-items-center hero2">
      <div
        className="container  position-relative"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <h1 className="text-center" style={{ marginTop: "100px" }}>
          Discover Real Value of Travel
        </h1>
        <div
          className="container tab_container"
          style={{ textAlign: "left", marginTop: "80px" }}
        >
          <ul className="tabs">
            <li
              className={`tab-link ${currentTab === "tab-1" ? "current" : ""}`}
              onClick={() => handleTabClick("tab-1")}
            >
              <i className="fa-solid fa-plane"></i> Flight
            </li>
            <li
              className={`tab-link ${currentTab === "tab-2" ? "current" : ""}`}
              onClick={() => handleTabClick("tab-2")}
            >
              <i className="fa-solid fa-hotel"></i> Hotels
            </li>
            <li
              className={`tab-link ${currentTab === "tab-3" ? "current" : ""}`}
              onClick={() => handleTabClick("tab-3")}
            >
              <i className="fa-solid fa-ticket"></i> Activities
            </li>
          </ul>
          <div
            className={`tab-content ${currentTab === "tab-1" ? "current" : ""}`}
          >
            <FlightTab/>
          </div>

          <div
            className={`tab-content ${currentTab === "tab-2" ? "current" : ""}`}
          >
            <HotelTab />
          </div>

          <div
            className={`tab-content ${currentTab === "tab-3" ? "current" : ""}`}
          >
            <Activitiestab/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
