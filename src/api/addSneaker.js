import { API_URL } from '../constans'

export default function addSneaker(data) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.error('Error:', error)
  })
}
