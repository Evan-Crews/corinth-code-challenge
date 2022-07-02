import {useQuery} from "react-query"
import {getCharacterDetails} from "../api/getCharacterDetails"

export const useGetCharacterDetails = (url) => {
  const {isLoading: isCharacterDetailsLoading, data: characterDetails} = useQuery(['url', url], () => getCharacterDetails(url))
  return {
    isCharacterDetailsLoading, characterDetails
  }
}