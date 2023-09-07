import { Route, Routes } from 'react-router-dom'
import StartPage from './screens/StartPage'
import { ROUTES } from './constans'
import CollectionPage from './screens/CollectionPage'

function App() {
  return (
    <Routes>
      <Route path={`${ROUTES.START_PAGE}`} element={<StartPage />} />
      <Route path={`${ROUTES.COLLECTION}`} element={<CollectionPage />} />
    </Routes>
  )
}

export default App
