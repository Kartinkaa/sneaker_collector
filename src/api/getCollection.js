import { API_URL } from '../constans'

export default function getCollection() {
  return fetch(API_URL, {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
}
