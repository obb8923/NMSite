import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Privacy from './components/Privacy'
import Withdrawal from './components/Withdrawal'
import Contact from './components/Contact'
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
