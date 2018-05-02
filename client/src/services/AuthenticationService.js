import Api from '@/services/Api'

// sends data as a post request to the server
export default {
  // sends info from register form to server
  register (credentials) {
    return Api.instance.post('register', credentials)
  },

  // sends info from login form to server
  async login (credentials) {
    console.log('trying')
    await Api.instance.post('api/students/login', credentials)
      .then((response) => {
        console.log('then')
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        console.log('error')
        return error
      })
  }
}
