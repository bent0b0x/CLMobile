import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useCallback, useEffect, useState } from 'react'
import { Button } from 'react-native'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import { RootStackParamList } from '../../../App'
import { loginSucceeded } from '../slices/authSlice'

const Wrapper = styled.View`
  padding: 10px;
`

const StyledTextInput = styled.TextInput`
  height: 100px;
`

export const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'login'>>()
  const dispatch = useDispatch()
  const [jwt, setJwt] = useState<string>()

  const handleLoginPress = useCallback(async () => {
    try {
      dispatch(loginSucceeded({ jwt }))
      navigation.navigate('profile')
    } catch (error) {
      console.error(error)
    }
  }, [jwt, dispatch, navigation])

  const isLoginDisabled: boolean = !jwt

  useEffect(() => {
    if (jwt) {
      handleLoginPress()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleLoginPress])

  return (
    <Wrapper>
      <StyledTextInput
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={setJwt}
        value={jwt}
        placeholder="Password"
      />

      <Button
        title="Login"
        onPress={handleLoginPress}
        disabled={isLoginDisabled}
      />
    </Wrapper>
  )
}
