import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const createBlog = async (newBlog) => {
  const config = {
    headers: {Authorization: token}
  }

  const response = await axios.post(baseUrl, newBlog, config)
  return response.data 
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}

export default { getAll, setToken, createBlog }