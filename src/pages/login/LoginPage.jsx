import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Navbar from "../../component/Navbar";
import './login.css';
import about_icon1 from '../../assets/about-icon-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { loginMiddleware } from "../../stores/action/actionCreator"; 

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false); // State untuk show password
  const [loginData, setLoginData] = useState({
    nameUser: "", // Mengganti email dengan nameUser
    password: ""
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const formHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler untuk submit form
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginMiddleware(loginData));
    if (result) {
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div data-aos="zoom-in" data-aos-duration="1000" className="login-card">
          {/* <img src={about_icon1} alt="Coffee Icon" className="coffee-icon" /> */}
          <h2>Login</h2>
          <p>Sign in to continue</p>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="nameUser" // Mengganti placeholder email menjadi nameUser
              placeholder="Your Name"
              value={loginData.nameUser} // Menggunakan nameUser untuk state
              onChange={formHandler}
              required
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={formHandler}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <i> <FontAwesomeIcon icon={faEyeSlash} /></i>
                ) : (
                  <i> <FontAwesomeIcon icon={faEye} /></i>
                )}
              </span>
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p style={{fontSize: "12px"}}>Please <a onClick={() => navigate("/register")}>Register</a> if you don't have an account</p>
          <p style={{fontSize: "12px"}}>www.radenmaskopi.com</p>
        </div>
      </div>
    </div>
  );
}
