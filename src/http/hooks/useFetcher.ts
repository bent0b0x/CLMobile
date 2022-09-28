import { useCallback, useEffect, useState } from 'react'

interface FetcherArgs<T> {
  fetcher: (...args: any) => Promise<T>
}

interface FetcherReturnValue<T> {
  data: T | null
  loading: boolean
  error: Error | null
  retry: (...args: any) => void
}

export const useFetcher = <T>({
  fetcher
}: FetcherArgs<T>): FetcherReturnValue<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const fetch = useCallback(
    (...args: any) => {
      setError(null)
      setLoading(true)

      fetcher(...args)
        .then((response) => {
          setData(response)
        })
        .catch((error) => {
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [fetcher]
  )

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, retry: fetch }
}
