import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
