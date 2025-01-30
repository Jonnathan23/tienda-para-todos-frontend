import axios from "axios"

export const apiDjango = axios.create({
    baseURL: "http://localhost:3000"
})

export const apiEmails = axios.create({
    baseURL: "http://localhost:4000"
})

