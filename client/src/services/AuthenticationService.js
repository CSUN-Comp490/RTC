import Api from '@/services/Api'

// sends data as a post request to the server
export default{
  // sends info from register form to server
  register (credentials) {
    return Api().post('register', credentials)
  },

  // sends info from login form to server
  login (credentials) {
    return Api().post('login', credentials)
  }
}
