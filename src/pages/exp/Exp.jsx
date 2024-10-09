import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../component/Navbar';
import './exp.css'

const Exp = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user);

  const formattedDate = new Date(user.join).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });


  const expPercentage = (user.exp / 10) * 100;

  return (
    <>
      <Navbar />
      <div className="con-exp">
        <div className="profile-page">
          <h1>Profil Pengguna</h1>
          <div className="profile-card">
            {/* <img src={user.profilePicture} alt={`${user.name}'s profile`} /> */}
            <h2>{user.name}</h2>
            <p>No Whatsupp: {user.hp}</p>
            <p>Tanggal Bergabung: {formattedDate}</p>

            <div className="exp-container">
              <div className="exp-bar" style={{ width: `${expPercentage}%` }}></div>
            </div>
            <p>EXP: {user.exp}/10</p>
            <p className="level">Level: {user.level}</p>
            <p>Point : {user.point}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exp;
