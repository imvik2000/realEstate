import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '208171faa5msh838f3591735c7d2p14cf6ejsn1129b37c95a9' ,
    },
  });
    
  return data;
}