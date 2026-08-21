import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [ userData, setUserData ] = useState({})

  const navigate = useNavigate();

  // const {user, setUser } = React.useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    // Add this above your axios call to check the value
    console.log('Base URL:', import.meta.env.VITE_BASE_URL);

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    // if (response.status === 201) {
    //   const data = response.data
    //   // setUser(data.user)
    //   localStorage.setItem('token', data.token)
    //   navigate('/home')
    // }

    if (response.status === 201) {
     localStorage.setItem(
  'verifyData',
  JSON.stringify({
    email: response.data.user.email,
    role: 'user'
  })
);

   navigate('/verify-otp');
}

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  };
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div className="pb-8">
         
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg w-1/2  font-medium mb-2">
              What's your name
            </h3>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>

            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>

            <input
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type="password"
              placeholder="password"
            />

            <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
              Create account
            </button>
          </form>
          <p className="text-center">
            Already have a account?{' '}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[11px] mb-5 leading-tight">
            This site is protected by reCAPTCHA and the{' '}
            <span className="underline">Google Privacy Policy</span> and{' '}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;











// NEW CODE

// import { useContext, useState } from "react";
// import { data, Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { UserDataContext } from "../context/UserContext";

// const UserSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const navigate = useNavigate();
//   const { user, setUser } = useContext(UserDataContext);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     // setFirstName("");
//     // setLastName("");
//     // setEmail("");
//     // setPassword("");

//     const newUser = {
//       fullname: {
//         firstname: firstName,
//         lastname: lastName,
//       },
//       email: email,
//       password: password,
//     };

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/users/register`,
//         newUser,
//       );

//       if (response.status === 201) {
//         setUser(response.data.user);
//         localStorage.setItem("token", response.data.token);
//         navigate("/home");
//       }
//     } catch (error) {
//       console.error(error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="p-7 h-screen flex flex-col justify-between">
//       <div>
//         <img
//           className="w-26 mb-5"
//           src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
//           alt="uber-logo"
//         />
//         <form onSubmit={(e) => submitHandler(e)}>
//           <h3 className="text-lg font-medium mb-2">What's your name</h3>
//           <div className="flex gap-4 mb-6">
//             <input
//               type="text"
//               required
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               placeholder="first name"
//               className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2  text-lg placeholder:text-base"
//             />{" "}
//             <input
//               type="text"
//               required
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               placeholder="last name"
//               className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2  text-lg placeholder:text-base"
//             />
//           </div>
//           <h3 className="text-lg font-medium mb-2">What's your email</h3>
//           <input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="email@example.com"
//             className="bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base"
//           />
//           <h3 className="text-lg font-medium mb-2">Enter Password</h3>
//           <input
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="password"
//             className="bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base"
//           />
//           <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base">
//             Create Account
//           </button>
//           <p className="text-center">
//             Already have an account?{" "}
//             <Link to={"/login"} className="text-blue-500">
//               Login here
//             </Link>
//           </p>
//         </form>
//       </div>

//       <div>
//         <p className="text-[9px] leading-tight text-center">
//           By proceeding, you consent to get calls, Whatsapp or SMS <br />
//           messages, including by automated means, from Uber and <br />
//           its affiliates to the email you provided.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default UserSignup;
