import { Text } from 'react-native'
import { useProfileData } from '../hooks/useProfileData'

export const UserProfile = () => {
  const { data: user } = useProfileData()

  return <Text>{JSON.stringify(user)}</Text>
}
