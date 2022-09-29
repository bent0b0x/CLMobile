import { useCallback } from 'react'
import { useFetcher } from '../../http/hooks/useFetcher'
import { useHttpClient } from '../../http/hooks/useHttpClient'
import { Match } from '../types/profileTypes'

interface Props {
  userId: number
}

export const useLastMatches = ({ userId }: Props) => {
  const httpClient = useHttpClient()

  const fetcher = useCallback(() => {
    return httpClient<Match[]>(
      `/resources/res/user/${userId}/matches/page/1?sportId=&pageSize=5`
    )
  }, [httpClient, userId])

  return useFetcher({ fetcher })
}
