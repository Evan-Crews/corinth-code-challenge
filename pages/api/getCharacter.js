import axios from "axios"


export const getCharacterDetails = async(characterName) => {
  const data = await axios.get(`https://swapi.dev/api/people/?search=${characterName}`)
  return data;
}
export const getDefaultCharacter = async(characterName) => {
  const data = await axios.get(`https://swapi.dev/api/people/?search=luke skywalker`)
  return data.data;
}
export const getHumanSpecies = async() => {
  const data = await axios.get('https://swapi.dev/api/species/1/')
  return data.data;
}
// export const getDefaultCharacter = async(characterName) => {
//   const data = await fetch(`https://swapi.dev/api/people/?search=luke skywalker`)
//   const character = await data.json()
//   return character
// }