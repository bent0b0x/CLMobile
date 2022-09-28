import axios from 'axios'
import { httpClient } from '../../http/httpClient'
import { buildUrlEncodedFormBody } from '../utils/authUtils'

interface LoginArgs {
  jwt: string
}

export const loginClient = ({ jwt }: LoginArgs) => {
  return axios.get('https://api.ussquash.com/resources/res/user', {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${jwt}`
    }
  })
}
