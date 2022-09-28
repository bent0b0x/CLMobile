export const buildUrlEncodedFormBody = (body: object): string => {
  const formBody = []
  for (const property in body) {
    const encodedKey = encodeURIComponent(property)
    const encodedValue = encodeURIComponent(body[property])
    formBody.push(encodedKey + '=' + encodedValue)
  }
  const urlEncodedFormBody: string = formBody.join('&')

  console.log({ urlEncodedFormBody })

  return urlEncodedFormBody
}
