import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { loginClient } from '../../auth/clients/authClients'

export const UserProfile = () => {
  const [user, setUser] = useState(null)
  const jwt = useSelector((state) => state.auth.jwt)

  useEffect(() => {
    loginClient({ jwt }).then(({ data }) => {
      setUser(data)
    })
  }, [])

  return <Text>{JSON.stringify(user)}</Text>
}
