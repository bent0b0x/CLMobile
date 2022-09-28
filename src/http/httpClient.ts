const API_URL = `https://api.ussquash.com/`

interface HttpRequestInit extends Omit<RequestInit, 'body'> {
  body?: object
}

export const httpClient = (
  resource: string,
  options: HttpRequestInit
): Promise<Response> => {
  const { body, ...restOptions } = options
  const finalOptions: RequestInit = { ...restOptions }

  if (body) {
    finalOptions.body = JSON.stringify(body)
  }

  return fetch(`${API_URL}/resource`, finalOptions)
}
