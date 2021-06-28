import axios from 'axios'

const CRICKETER_API_BASE_URL = 'https://cricketers-info-sp.herokuapp.com'
class CricketerService {
  getCricketers() {
    return axios.get(CRICKETER_API_BASE_URL)
  }

  createCricketer(cricketer) {
    return axios.post(CRICKETER_API_BASE_URL, cricketer)
  }

  getCricketerById(cricketerid) {
    return axios.get(CRICKETER_API_BASE_URL + '/' + cricketerid)
  }

  updateCricketer(cricketer, cricketerid) {
    return axios.put(CRICKETER_API_BASE_URL + '/' + cricketerid, cricketer)
  }

  deleteCricketer(cricketerid) {
    return axios.delete(CRICKETER_API_BASE_URL + '/' + cricketerid)
  }
}

export default new CricketerService()
