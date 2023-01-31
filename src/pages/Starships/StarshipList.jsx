import { useEffect, useState } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from 'react-router-dom'


const StarshipList = () => {
  const [ starshipList, setStarshipList ] = useState([])

  useEffect (() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  
  return(
    <>
      <h1>Star Wars Starships</h1>
      {starshipList.length ?
        <> 
        {starshipList.map(starship =>
            <Link to='/starship' state={{starship}}  key={starship.name}>
            {starship.name}</Link>
          
        )}
      </>
      :
      <> 
      <h4> Loading starships... </h4>
      </>
      }
    </>
  )
}

export default StarshipList