import React, {useContext, useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const {  setUser } = useContext(UserDataContext)
  const [ isLoading, setIsLoading ] = useState(true)
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setUser(response.data)
                setIsLoading(false)
            }
        })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                navigate('/login')
            })
    }, [ token ])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }


  return <>{children}</>
}

export default UserProtectWrapper











// NEW CODE

// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { UserDataContext } from "../context/UserContext";

// const UserProtectWrapper = ({ children }) => {
//  const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();
//   const {user, setUser} = useContext(UserDataContext)

//   useEffect(() => {
//      if (!token) {
//        navigate("/login");
//      }
//   }, [token])

//    axios
//      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
//        headers: {
//          Authorization: `Bearer ${token}`,
//        },
//      })
//      .then((response) => {
//        if (response.status === 200) {
//          setUser(response.data.user);
//          setLoading(false);
//        }
//      })
//      .catch((err) => {
//        console.log(err);
//        localStorage.removeItem("token");
//        navigate("/login");
//      });

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return <>{children}</>;
// };

// export default UserProtectWrapper;
