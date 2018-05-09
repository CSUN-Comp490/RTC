import Api from '@/services/Api'

// sends data as a post request to the server
export default {
  // sends info from register form to server
  register (credentials) {
    console.log(credentials)
    if (credentials.role === 'Student') {
      return Api.instance.post('api/students/', credentials)
    } else if (credentials.role === 'Captionist') {
      return Api.instance.post('api/captionists/', credentials)
    } else if (credentials.role === 'Admin') {
      return Api.instance.post('api/admins/', credentials)
    }
  },

  // sends info from login form to server
  async login (credentials) {
    // If info passed returned a student
    var response = null
    if (credentials.token === 'Student') {
      response = await Api.instance.post('api/students/login', credentials)
        .then((response) => {
          return response.data
        })
    } else if (credentials.token === 'Captionist') {
      response = await Api.instance.post('api/captionists/login', credentials)
        .then((response) => {
          console.log(response)
          return response.data
        })
    } else if (credentials.token === 'Admin') {
      response = await Api.instance.post('api/admins/login', credentials)
        .then((response) => {
          return response.data
        })
    }
    return response
  }
}
