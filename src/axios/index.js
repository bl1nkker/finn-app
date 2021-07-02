import axios from 'axios'

const API = axios.create({ baseURL: 'http://127.0.0.1:8000/api' })

// This adds a headers to each request. It happens before all functions below
// API.interceptors.request.use( (req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }

//     return req
// } )

export const getInvoices = () => API.get('/app/invoice')
export const postInvoice = (invoiceData) => API.post('/app/invoice/', invoiceData)
export const putInvoice = (invoiceData, invoiceId) => API.put(`/app/invoice/${invoiceId}`, invoiceData)
export const deleteInvoice = (invoiceId) => API.delete(`/app/invoice/${invoiceId}`)

export const getRevenues = () => API.get('/app/revenue')
export const postRevenue = (revenueData) => API.post('/app/revenue/', revenueData)
export const putRevenue = (revenueData, revenueId) => API.put(`/app/revenue/${revenueId}`, revenueData)
export const deleteRevenue = (revenueId) => API.delete(`/app/revenue/${revenueId}`)

export const getBudgets = (budgetType) => API.get(`/app/budget/${budgetType}/`)
export const postBudget = (budgetType, budgetData) => API.post(`/app/budget/${budgetType}/`, budgetData)
export const putBudget = (budgetType, budgetData, budgetId) => API.put(`/app/budget/${budgetType}/${budgetId}`, budgetData)
export const deleteBudget = (budgetType, budgetId) => API.delete(`/app/budget/${budgetType}/${budgetId}`)

export const loginUser = (email, password) => API.post('/accounts/auth/loginaccount', {email, password})
