import { useEffect, useState } from "react"
import { getHumanSpecies } from "../api/getCharacter";
import { CharacterFilms } from "./CharacterFilms"
import { CharacterShips } from "./CharacterShips"
import { CharacterSpecies } from "./CharacterSpecies"
import { apiHelper } from "../helpers/apiHelper"


export default function CharacterProfile({details}) {
  const [species, setSpecies] = useState([])
  const [ships, setShips] = useState([])
  const [films, setFilms] = useState([])
  const humanHelper = async () => {
    const result = await getHumanSpecies()
    setSpecies([result])
  }
  useEffect( () => {
    console.log('this is details', details)
    apiHelper(details.films, setFilms)
    apiHelper(details.starships, setShips)
    if(details.species.length === 0) {
      console.log('human helper')
      humanHelper()
    } else {
      apiHelper(details.species, setSpecies)
    }
    console.log('films', films)
  }, [])
  return (
    <div className="characterProfile">
      <div className="characterStats">
        <h1>{details.name}</h1>
        <p className="statText">Height: {Math.round(details.height / 30.48 * 100) /100}</p>
        <p className="statText">Weight: {Math.floor(details.mass * 2.204)} lbs</p>
        <p className="statText">Hair Color: {details.hair_color}</p>
        <p className="statText">Date of Birth: {details.birth_year}</p>
      </div>
      <div className="characterFilms">
        {/* {!!films.length && <p>{films[0].title}</p>} */}
        {!!films.length && <CharacterFilms films={films}/>}
      </div>
      <div className="characterSpecies">
        {!!species.length && <CharacterSpecies species={species[0]}/>}
        {/* {!!species.length ? <p>{species[0].name}</p> : <p>loading</p>} */}
        {/* {isCharacterSpeciesLoading && <h3>loading...</h3>} */}
        {/* {characterSpecies && <p>{characterSpecies.name}</p>} */}
      </div>
      <div className="characterShips">
        {/* {!!ships && <p>{ships[0].name}</p>} */}
        {/* {!!ships.length ? <p>{ships[0].name}</p> : <p>loading</p>} */}
        {!!ships.length && <CharacterShips ships={ships}/>}
      </div>
    </div>
  )
}