import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getJwt } from '../../auth/selectors/authSelectors'
import { createJwtAuthHttpClient } from '../clients/httpClient'

export const useHttpClient = () => {
  const jwt = useSelector(getJwt)

  return useMemo(() => {
    return createJwtAuthHttpClient({ jwt })
  }, [jwt])
}
