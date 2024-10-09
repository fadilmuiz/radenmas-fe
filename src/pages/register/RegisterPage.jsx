import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Navbar from "../../component/Navbar";
import about_icon1 from '../../assets/about-icon-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { registerMiddleware } from "../../stores/action/actionCreator";

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [adminData, setAdminData] = useState({
    nameUser: "",
    noHp: "",
    password: "",
  });

  // Handler to update form state on input change
  const formHandler = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler to submit the form
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(registerMiddleware(adminData));
    navigate("/login");
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div data-aos="zoom-in" data-aos-duration="1000" className="login-card">
          {/* <img src={about_icon1} alt="Coffee Icon" className="coffee-icon" /> */}
          <h2>Create a new account</h2>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="nameUser"
              placeholder="Your name"
              value={adminData.nameUser}
              onChange={(formHandler)}
              required
            />
            <input
              type="text"
              name="noHp"
              placeholder="No Hp"
              value={adminData.noHp}
              onChange={(formHandler)}
              required
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={adminData.password}
                onChange={(formHandler)}
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
            <button type="submit" className="login-btn">Register</button>
          </form>
          <p style={{fontSize: "12px"}}>Back to <a onClick={() => navigate("/login")}>Login</a> </p>
          <p style={{fontSize: "12px"}}>www.radenmaskopi.com</p>

        </div>
      </div>
    </div>
  )
}