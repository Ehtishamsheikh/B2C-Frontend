import React from 'react'
import HeroSection from './src/HeroSection/HeroSection'
import BookingCard from '../../components/BookingCard/BookingCard'
import { items } from '../../constants/CardsConstants'
import FavoritePlaces from '../../components/OurFavPlaces/OurFavPlaces'

function HotelsPage() {
  return (
    <>
     <HeroSection/>
     <BookingCard items={items} heading={"WHY BOOK WITH US?"}/>
     <FavoritePlaces/>
    </>
  )
}

export default HotelsPage