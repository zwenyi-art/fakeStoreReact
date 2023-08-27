import axios from 'axios'
const  BASE_URL = "https://fakestoreapi.com"

// const headers= {
//    'X-RapidAPI-Key': 'b4a805e4eemsh00c1314bf75c296p145f41jsn5593571a5a84',
//    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
//  };
//  const  params= {
//    currentCountry: 'US'
//  };

export const getData = async(url)=>{
   const {data}=await axios.get(`${BASE_URL}${url}`);
   return data;
}