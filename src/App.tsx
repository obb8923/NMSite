import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Privacy from './pages/Privacy'
import Withdrawal from './pages/Withdrawal'
import Contact from './pages/Contact'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
