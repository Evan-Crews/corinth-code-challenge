import axios from "axios"

export const getCharacterDetails = async (url) => {
  try {
    console.log('this is url',url)
    const response = await axios.get(url)
    return response?.data
  } catch (e) {
    console.log(e);
  }

}