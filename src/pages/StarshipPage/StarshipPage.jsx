import { useState, useEffect } from "react";
import { getDetails } from "../../services/sw-api"
import { Link, useLocation } from 'react-router-dom'

const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState({})
  const location = useLocation()

  useEffect(() => {
  const fetchDetails = async () => {
    const starshipData = await getDetails (location.state.starship.url)
    setStarshipPage(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <h3>Starship Deets</h3>
      <h3>{starshipPage.name}</h3>
      <h4>{starshipPage.model}</h4>
      <Link to='/'>
        Return to Starships
      </Link>
    </>
  )
}

export default StarshipPage
