import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import TrackingPage from './components/TrackingPage'
import BookingPage from './components/BookingPage'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'
import EnhancedBookingPage from './components/EnhancedBookingPage'
import DriverApp from './components/DriverApp'
import AWBTracker from './components/AWBTracker'
import AWBGenerator from './components/AWBGenerator'
import AWBManagement from './components/AWBManagement'
import EnhancedAdminDashboard from './components/EnhancedAdminDashboard'
import MapIntegrationPage from './pages/MapIntegrationPage'
import { EnhancedBookingWithMaps } from './components/maps'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><HomePage /></>} />
        <Route path="/track" element={<><Header /><TrackingPage /></>} />
        <Route path="/book" element={<><Header /><BookingPage /></>} />
        <Route path="/book-enhanced" element={<><Header /><EnhancedBookingPage /></>} />
        <Route path="/admin" element={<><Header /><AdminLogin /></>} />
        <Route path="/admin/dashboard" element={<><Header /><AdminDashboard /></>} />
        <Route path="/admin/enhanced" element={<EnhancedAdminDashboard />} />
        <Route path="/driver" element={<DriverApp />} />
        <Route path="/track-awb" element={<><Header /><AWBTracker /></>} />
        <Route path="/admin/awb" element={<><Header /><AWBManagement /></>} />
        <Route path="/admin/generate-awb" element={<><Header /><AWBGenerator /></>} />
        <Route path="/maps" element={<><Header /><MapIntegrationPage /></>} />
        <Route path="/book-with-maps" element={<><Header /><EnhancedBookingWithMaps /></>} />
      </Routes>
    </Router>
  )
}

export default App

