import { RootState } from '../../store/store'

export const getJwt = (state: RootState) => state.auth.jwt
