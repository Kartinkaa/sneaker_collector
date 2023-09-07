import { API_URL } from '../constans'

export default function removeSneaker(id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
