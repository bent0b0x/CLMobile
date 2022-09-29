import { Text, View } from 'react-native'
import { useProfileData } from '../hooks/useProfileData'
import { LastMatches } from './LastMatches'

export const UserProfile = () => {
  const { data: user } = useProfileData()

  if (!user) {
    return null
  }

  return (
    <View>
      <Text>{user.name}</Text>
      {user.isMember ? <Text>US Squash #: {user.PlayerId}</Text> : null}
      <LastMatches name={user.name} userId={user.PlayerId} />
    </View>
  )
}
