import axios from 'axios'

// var baseUrl = window.location.origin
// var host = window.location.host
// var pathArray = window.location.pathname.split('/')

var instance = axios.create({
  baseURL: 'http://localhost:8080/'
  // baseURL: baseUrl + host + pathArray[1] + `:8080/`
  // ,withCredentials: true
})

export default {instance}
