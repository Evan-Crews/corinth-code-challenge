import axios from "axios"
export const apiHelper = (urlArray, setState) => {
  const result = urlArray.map(async (item, index) => {
    const data = await axios.get(item);
    setState((prevState) => {
      return [...prevState, data.data]
    })
    return data.data;
  })
}