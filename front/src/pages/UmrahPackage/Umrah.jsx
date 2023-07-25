import React from "react";
import { items } from "../../constants/CardsConstants";
import UmrahBookingForm from "../../components/UmrahBookingForm/UmrahBookingForm";
import BookingCard from "../../components/BookingCard/BookingCard";
import ServicesSection from "./src/ServicesSection";
import UmrahPackages from "./src/UmrahPackages";

function Umrah() {
  return (
    <>
      <UmrahBookingForm />
      <UmrahPackages/>
      <ServicesSection/>
      <BookingCard items={items} heading="WHY BOOK WITH US?" />
      
    </>
  );
}

export default Umrah;
