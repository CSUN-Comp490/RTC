import Api from '@/services/Api'

export default {
  index (credentials) {
    return Api().get('classes')
  }
}
