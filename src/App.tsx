import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import RSVP from './pages/RSVP'
import Gallery from './pages/Gallery'
import Location from './pages/Location'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
