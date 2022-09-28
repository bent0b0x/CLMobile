import { useCallback } from 'react'
import { useFetcher } from '../../http/hooks/useFetcher'
import { useHttpClient } from '../../http/hooks/useHttpClient'
import { User } from '../types/profileTypes'

interface ReturnValue {
  data: User | null
}

export const useProfileData = (): ReturnValue => {
  const httpClient = useHttpClient()
  const fetcher = useCallback(() => {
    return httpClient<User>('/resources/res/user')
  }, [httpClient])

  const { data } = useFetcher({ fetcher })

  return { data }
}
