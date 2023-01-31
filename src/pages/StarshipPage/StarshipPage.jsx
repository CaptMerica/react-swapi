import { useState, useEffect } from "react";
import { getStarshipPage } from "../../services/sw-api"
import { useLocation } from 'react-router-dom'

const StarshipPage = () => {
  const location = useLocation()

  useEffect(() => {
  const fetchDetails = async () => {
    const starshipData = await getDetails (location.state.starship.url)
    setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])
  return (
    <>
      <h3>Starship Deets</h3>
    </>
  )
}

export default StarshipPage
