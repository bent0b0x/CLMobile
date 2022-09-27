const API_URL = `https://api.ussquash.com/`

export const httpClient = (
  resource: string,
  options: RequestInit
): Promise<Response> => {
  return fetch(`${API_URL}/resource`, options)
}
