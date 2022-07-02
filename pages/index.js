import Head from 'next/head'
import { useState, useEffect } from 'react'

import {getCharacterDetails, getDefaultCharacter} from './api/getCharacter'
import CharacterProfile from './components/CharacterProfile'
import { ResultsList } from './components/ResultsList'

export async function getServerSideProps() {
  const character = await getDefaultCharacter()
  return {props:{data:character}};
}
export default function Home({data}) {
  const [search, setSearch] = useState()
  const [character, setCharacter] = useState()
  useEffect(() => {
    console.log(character)
  }, [character])
  const handleClick = async () => {
    setCharacter('')
    const characterDetails = await getCharacterDetails(search)
    const characterArr = [...characterDetails.data.results]
    setCharacter([...characterArr])
  }
  return (
    <div>
      <Head>
        <title>SWAPI Profile Page</title>
        <meta name="description" content="Created By Evan Crews" />
        <link rel="icon" href="/Stormtrooper.png" />
      </Head>

      <main className="mainPage">
        <h1 className='pageTitle'> Star Wars Character Info
        </h1>
        <div className='searchBar'>
          <input onChange={(e) => {setSearch(e.target.value)}}placeholder='Enter a character name'></input>
          <button onClick={handleClick}>Search</button>
        </div>
        {!!character && <div className='resultsContainer'>
          {character.length=== 1 && <CharacterProfile details={character[0]}/>}
          {character.length > 1 && <ResultsList characterArr={character} setState={setCharacter}/>}
        </div>}
      </main>

     
    </div>
  )
}
