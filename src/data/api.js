const FAKE_API_URL = 'https://gist.githubusercontent.com/40thieves/e18665f42b9a7f32003a86f060b92fb2/raw/41f6f221067803447fa5daa78dd450455e47f57d/fake-api.json'
const ERROR_API_URL = 'http://httpbin.org/status/500'

function toJson(data) {
  if (data.ok) {
    return data.json()
  } else {
    throw new Error(data.statusText)
  }
}

export function successful() {
  return fetch(FAKE_API_URL).then(toJson)
}

export function error() {
  return fetch(ERROR_API_URL).then(toJson)
}

export function slow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      successful().then(resolve).catch(reject)
    }, 2000)
  })
}