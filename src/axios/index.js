import axios from 'axios'

const API = axios.create({ baseURL: 'http://127.0.0.1:8000/api/app' })

// This adds a headers to each request. It happens before all functions below
// API.interceptors.request.use( (req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }

//     return req
// } )

export const getInvoices = () => API.get('/invoice')
export const postInvoice = (invoiceData) => API.post('/invoice/', invoiceData)
export const putInvoice = (invoiceData, invoiceId) => API.put(`/invoice/${invoiceId}`, invoiceData)