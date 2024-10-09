import React, { useEffect, useState } from 'react';
import './navbar-style.css'
import feather from 'feather-icons';
import logo_icon from '../assets/logo-icon1.png'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { persistor } from '../stores/index'

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // console.log(user);


  useEffect(() => {
    feather.replace();

    const navbarNav = document.querySelector('.navbar-nav');
    document.querySelector('#hamburger-menu').onclick = () => {
      navbarNav.classList.toggle('active');
    };

    // click diluar side bar
    const hamburger = document.querySelector('#hamburger-menu');
    const handleClickOutside = (e) => {
      if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMyExpClick = () => {
    if (user.id) {
      // Navigasi ke halaman My Exp dengan mengirimkan userId sebagai parameter
      navigate(`/my-exp/${user.id}`);
    }
  };
  const logout = (e) => {
    e.preventDefault();
    persistor.purge();
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };
  return (
    <div>
      <nav className="navbar">
        <img onClick={() => navigate("/")} className="navbar-logo" src={logo_icon} alt="" />
        <div className="navbar-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#review">Review</a>
          {user?.token && user?.role === 'user' && (
            <a style={{cursor: "pointer"}} onClick={handleMyExpClick}>My Exp</a>
          )}
          {user?.role === 'admin' && (
            <a style={{cursor: "pointer"}} onClick={() => navigate("/list-user")}>List user</a>
          )}
          {user?.token && (
            <a style={{cursor: "pointer"}} onClick={logout}>Logout</a>
          )}
        </div>
        <div className="navbar-extra" id="hamburger-menu">
          <a><i data-feather="menu"></i></a>
        </div>
      </nav>
    </div>
  );
}
