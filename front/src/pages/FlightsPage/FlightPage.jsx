import React from 'react'
import HeroSection from '../HotelsPage/src/HeroSection/HeroSection'
import BookingCard from '../../components/BookingCard/BookingCard'
import FavoritePlaces from '../../components/OurFavPlaces/OurFavPlaces'
import { items } from '../../constants/CardsConstants'

function FlightPage() {
  return (
    <>
    <HeroSection/>
    <BookingCard items={items} heading={"WHY BOOK WITH US?"}/>
    <FavoritePlaces/>
   </>
  )
}

export default FlightPage