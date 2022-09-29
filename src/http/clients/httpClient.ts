const BASE_API_URL = 'https://api.ussquash.com/'

export const createJwtAuthHttpClient = ({ jwt }: { jwt: string | null }) => {
  const httpClient = async <ResponseType>(
    path: string,
    init: RequestInit = {}
  ): Promise<ResponseType> => {
    const processedPath = path[0] === '/' ? path.slice(1) : path

    const response = await fetch(`${BASE_API_URL}${processedPath}`, {
      ...init,
      headers: {
        ...(init.headers || {}),
        Authorization: `Bearer ${jwt}`
      }
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json() as Promise<ResponseType>
  }

  return httpClient
}
