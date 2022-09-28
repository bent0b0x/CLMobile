import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from './src/auth/components/LoginScreen'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import { UserProfile } from './src/profile/components/UserProfile'

export type RootStackParamList = {
  login: undefined
  profile: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="profile" component={UserProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
