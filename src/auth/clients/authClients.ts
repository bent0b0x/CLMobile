import { httpClient } from '../../http/httpClient'

interface LoginArgs {
  username: string
  password: string
}

export const loginClient = ({ username, password }: LoginArgs) => {
  return httpClient('clublocker_login', { body: { username, password } })
}
