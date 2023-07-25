import React from "react";
import WhyUsSection from "../../components/WhyUsHome/WhyUsHome";
import HeroSection from "./src/HeroSection/HeroSection";
import ClientsSection from "./src/OurClients/OurClients";
import AboutSection from "./src/About/About";
import FavoritePlaces from "../../components/OurFavPlaces/OurFavPlaces";
import AboutUsSection from "./src/MoreAboutUs/MoreAboutUs";
import { items } from "../../constants/CardsConstants";
import BookingCard from "../../components/BookingCard/BookingCard";

function Home() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <ClientsSection />
      <AboutSection />
      <BookingCard items={items} heading="WHY BOOK WITH US?" />
      <FavoritePlaces />
      <AboutUsSection />
    </>
  );
}

export default Home;
