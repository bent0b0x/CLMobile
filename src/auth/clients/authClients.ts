import axios from 'axios'

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
