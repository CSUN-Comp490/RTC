import axios from 'axios'

// var baseUrl = window.location.origin
// var host = window.location.host
// var pathArray = window.location.pathname.split('/')

var instance = axios.create({
  baseURL: 'http://localhost:8080/',
  responseType: 'json',
  dataType: 'json',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {instance}
