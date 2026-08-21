import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import UserLogout from './pages/UserLogout'
import VerifyOtp from './pages/verifyOtp'
import Home from './pages/Home'

const App = () => {

  return (
    <div className='text-black'>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/verify-otp" element={<VerifyOtp />} />

        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>
        } />

      </Routes>
    </div>
  )
}

export default App