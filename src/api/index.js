import axios from "axios";
export const searchWord = async (keyword) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    const { data } = await axios.get(url)
    return data[0]
}

//add here your call to pexel api