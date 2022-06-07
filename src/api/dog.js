import axios from "axios";

const URL_API = import.meta.env.VITE_API;
const randomImage = "/breeds/image/random"
const imageDetail="/breed/hound/images/random/6"

export const getAllDogs = async(path) => {
  const data = await axios.get(URL_API + path);
  console.log(data.data.message)
  return data.data.message
 
};

export const imageRandom = async()=>{
const data = await axios.get(URL_API+randomImage)
return data.data.message
};

export const imageDetailDog=async()=>{
  const data = await axios.get(URL_API+imageDetail)
return data.data.message
}