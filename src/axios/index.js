import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

// This adds a headers to each request. It happens before all functions below
// API.interceptors.request.use( (req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }

//     return req
// } )

export const getMemes = () => API.get('/api/memes')
