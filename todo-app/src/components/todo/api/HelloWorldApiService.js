import axios from "axios";



const apiClient = axios.create(

    {
        baseURL: 'http://localhost:8080'
    }
)

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }
// 2 ways to write it
export const retrieveHelloWorldBean 
    = () => axios.get('http://localhost:8080/hello-world-bean')

export const retrieveHelloWorldPathVariable
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`, {
        headers: {
            Authorization: ''
        }
    })

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
    })