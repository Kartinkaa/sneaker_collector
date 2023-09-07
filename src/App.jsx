import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import { ROUTES } from './constans'

function App() {
  return (
    <Routes>
      <Route path={`${ROUTES.HOME}`} element={<Home />} />
      <Route path={`${ROUTES.COLLECTION}`} element={<Collection />} />
    </Routes>
  )
}

export default App
