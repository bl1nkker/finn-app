import axios from 'axios'

const API = axios.create({ baseURL: 'http://137.184.15.87/api' })
// const API = axios.create({ baseURL: 'http://127.0.0.1:8000/api' })

// This adds a headers to each request. It happens before all functions below
// API.interceptors.request.use( (req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }

//     return req
// } )

export const getSignals = () => API.get(`/app/signals/`)

export const getBudgets = (budgetType, added_at_after, added_at_before, ordering) => API.get(`/app/budget/${budgetType}/`, { params: {
    added_at_after,
    added_at_before,
    ordering
  }})
export const postBudget = (budgetType, budgetData) => API.post(`/app/budget/${budgetType}/`, budgetData)
export const putBudget = (budgetType, budgetData, budgetId) => API.put(`/app/budget/${budgetType}/${budgetId}`, budgetData)
export const deleteBudget = (budgetType, budgetId) => API.delete(`/app/budget/${budgetType}/${budgetId}`)

export const getCategories = () => API.get('/app/production-type/')
export const getUsers = () => API.get('/accounts/users/')

export const getRevenues = (added_at_after, added_at_before) => API.get(`/app/revenue/`,{ params: {
    added_at_after,
    added_at_before,
  }})
export const postRevenue = (revenueData) => API.post('/app/revenue/', revenueData)
export const putRevenue = (revenueData, revenueId) => API.put(`/app/revenue/${revenueId}`, revenueData)
export const deleteRevenue = (revenueId) => API.delete(`/app/revenue/${revenueId}`)

export const getScans = (added_at_after, added_at_before) => API.get(`/app/scan/`, { params: {
    added_at_after,
    added_at_before,
  }})
export const postScan = (scanData) => API.post('/app/scan/', scanData)
export const putScan = (scanData, scanId) => API.put(`/app/scan/${scanId}`, scanData)
export const deleteScan = (scanId) => API.delete(`/app/scan/${scanId}`)

export const getInvoices = (added_at_after, added_at_before) => API.get(`/app/invoice/`, { params: {
    added_at_after,
    added_at_before,
  }})
export const postInvoice = (invoiceData) => API.post('/app/invoice/', invoiceData)
export const putInvoice = (invoiceData, invoiceId) => API.put(`/app/invoice/${invoiceId}`, invoiceData)
export const deleteInvoice = (invoiceId) => API.delete(`/app/invoice/${invoiceId}`)

export const getImporters = () => API.get('/app/importers')
export const postImporter = (importerData) => API.post('/app/importers/', importerData)
export const putImporter = (importerData, importerId) => API.put(`/app/importers/${importerId}`, importerData)
export const deleteImporter = (importerId) => API.delete(`/app/importers/${importerId}`)

export const getCoworkers = () => API.get('/app/employees')
export const postCoworker = (coworkerData) => API.post('/app/employees/', coworkerData)
export const putCoworker = (coworkerData, coworkerId) => API.put(`/app/employees/${coworkerId}`, coworkerData)
export const deleteCoworker = (coworkerId) => API.delete(`/app/employees/${coworkerId}`)

export const getCoworkersWithSalaries = () => API.get('/app/salary/')
export const postSalary = (salaryData) => API.post('/app/salary/deductions/', salaryData)
export const putSalary = (salaryData, salaryId) => API.put(`/app/salary/deductions/${salaryId}`, salaryData)
export const deleteSalary = (salaryId) => API.delete(`/app/salary/deductions/${salaryId}`)
export const postWorkHours = (workHourData) => API.post('/app/salary/work-hours/', workHourData)
export const putWorkHours = (workHourData, workHourId) => API.put(`/app/salary/work-hours/${workHourId}`, workHourData)
export const deleteWorkHours = (workHourId) => API.delete(`/app/salary/work-hours/${workHourId}`)

export const getAccounts = () => API.get('/accounts/users/')
export const postAccount = (accountData) => API.post('/accounts/users/', accountData)
export const putAccount = (accountData, accountId) => API.put(`/accounts/users/${accountId}`, accountData)
export const deleteAccount = (accountId) => API.delete(`/accounts/users/${accountId}`)

export const getFacilities = () => API.get('/app/facilities/')
export const postFacility = (facilityData) => API.post('/app/facilities/', facilityData)
export const putFacility = (facilityData, facilityId) => API.put(`/app/facilities/${facilityId}`, facilityData)
export const deleteFacility = (facilityId) => API.delete(`/app/facilities/${facilityId}`)

export const loginUser = (email, password) => API.post('/accounts/auth/loginaccount', {email, password})
