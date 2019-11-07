import axios from './axios'

const Instance = axios.create({
  baseUrl : "https://jsonplaceholder.typicode.com",
});

export default Instance;