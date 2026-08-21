import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timer, setTimer] = useState(30);

  const navigate = useNavigate();

  const verifyData = JSON.parse(localStorage.getItem('verifyData'));
  const email = verifyData?.email;
  const role = verifyData?.role;

  const endpoint = role === 'captain' ? 'captains' : 'users';

  const handleResendOtp = async () => {
    try {
      setResending(true);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/${endpoint}/resend-otp`,
        { email }
      );

      setTimer(30);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to resend OTP');
    } finally {
      setResending(false);
    }
  };

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/${endpoint}/verify-email`,
        {
          otp,
          email,
        }
      );

      alert(response.data.message);

      localStorage.removeItem('verifyData');

      if (role === 'captain') {
        navigate('/captain-login');
      } else {
        navigate('/login');
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m8 4H8m8-8H8m-2 12h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-900">
          Verify Email
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Enter the 6-digit code sent to your email address
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, ''))
            }
            placeholder="------"
            className="w-full h-14 border-2 border-gray-200 rounded-xl text-center text-2xl tracking-[1rem] font-semibold focus:outline-none focus:border-black transition-all"
          />

          <button
            type="submit"
            disabled={loading || otp.length !== 6}
            className="w-full mt-6 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition duration-200 disabled:opacity-60"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>

          <div className="text-center mt-5">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={timer > 0 || resending}
              className="text-sm text-gray-600 hover:text-black font-medium disabled:opacity-50"
            >
              {timer > 0 ? `Resend in ${timer}s` : 'Resend Code'}
            </button>
          </div>

          <p className="text-xs text-center text-gray-400 mt-6">
            For your security, this code expires in 10 minutes.
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;