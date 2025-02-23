import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Withdrawal from './pages/Withdrawal'
import Contact from './pages/Contact'
import Privacy from './pages/termsAndPrivacy/Privacy'
import Terms from './pages/termsAndPrivacy/Terms'
import LocationTerms from './pages/termsAndPrivacy/LocationTerms'
import MarketingTerms from './pages/termsAndPrivacy/MarketingTerms'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/locationTerms" element={<LocationTerms />} />
        <Route path="/marketingTerms" element={<MarketingTerms />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
