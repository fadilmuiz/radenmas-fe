import { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
// import image1 from '../assets/image-1.jpeg'
import image2 from '../assets/image-2.jpeg'
import about_icon1 from '../assets/about-icon-1.png'
import about_icon2 from '../assets/about-icon-2.png'
import about_icon3 from '../assets/about-icon-3.png'
import menu_banana from '../assets/menu-banana.jpeg'
import menu_butter from '../assets/menu-butter.jpeg'
import menu_caramel from '../assets/menu-caramel.jpeg'
import menu_hazelnut from '../assets/menu-hazelnut.jpeg'
import menu_palm from '../assets/menu-palm.jpeg'
import menu_pandan from '../assets/menu-pandan.jpeg'
import menu_roasted from '../assets/menu-roasted.jpeg'
import menu_vanila from '../assets/menu-vanila.jpeg'
import review1 from '../assets/review-1.jpeg'
import review2 from '../assets/review-2.jpeg'
import review3 from '../assets/review-3.jpeg'
import review4 from '../assets/review-4.jpeg'
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './dashboard-style.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_token');
  

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      {/* home */}
      <section className="hero" id="home">
        <main data-aos="zoom-in" data-aos-duration="3000" className="content">
          <h1>Welcome to</h1>
          <h1> Radenmas <span>Kopi.</span></h1>
          <p>Ini adalah website resmi money changer radenmas kopi Tempat pertukaran uang dengan sebotol inspirasi.</p>
          {!accessToken && (
            <a onClick={() => navigate('/login')} className="cta">
              Join member
            </a>
          )}
        </main>
      </section>

      {/* about */}
      <section id="about" className="about">
        {/* <h2><span>Tentang </span>Kami</h2> */}
        <div className="row">
          <div className="about-img">
            <img src={image2} alt="tentang-kami" />
          </div>
          <div data-aos="zoom-in" data-aos-duration="3000" className="content">
            <h3>Kenapa memilih Kopi kami ?</h3>
            <p>
              1. Kualitas Terjamin: Kami hanya memilih bahan kopi terbaik dan premium memastikan setiap cangkir memiliki cita rasa yang kaya dan autentik.
            </p>
            <p>
              2. ⁠Beragam Pilihan Rasa: Kami menawarkan berbagai macam latte dari kopi yang berkualitas, memenuhi selera setiap pecinta kopi.
            </p>
            <p>
              3. ⁠Pengalaman Kopi yang Unik: Setiap cangkir kopi kami diracik dengan hati-hati, memberikan pengalaman rasa yang tak terlupakan.
            </p>
            <p>
              4. ⁠Rasa yang Bersahabat: Kami banyak menyediakan kopi bagi yang tidak menyukainya, dengan rasa manis yang pas, tanpa mengurangi ciri khas dari kopi itu sendiri..
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000" className="icons-container">
          <div className="icons">
            <img src={about_icon1} alt="" />
            <h3>quality coffee</h3>
          </div>
          <div className="icons">
            <img src={about_icon2} alt="" />
            <h3>our branches</h3>
          </div>
          <div className="icons">
            <img src={about_icon3} alt="" />
            <h3>free delivery</h3>
          </div>
        </div>
        {/* <div className='content-about'>
          <h3>Tentang Kami</h3>
          <p>
            Selamat datang di Radenmas Kopi, tempat di mana cita rasa dan tradisi bertemu. Kami adalah penyedia kopi berkualitas tinggi yang berkomitmen untuk menyajikan pengalaman kopi yang tak terlupakan. Dengan mengutamakan bahan-bahan terbaik dan premium, setiap cangkir kopi kami adalah hasil dari proses yang teliti dan penuh cinta.
          </p>
          <p>
            Visi kami adalah membawa kebangkitan budaya kopi Indonesia ke seluruh penjuru. Di Radenmas Kopi, kami percaya bahwa setiap tegukan kopi memiliki cerita. Mari bergabung bersama kami untuk merasakan kehangatan dan keunikan setiap cangkir. Dan mulailah berinspirasi !!!
          </p>
          <p>
            Misi kami adalah menjadikan lidah pecintanya semakin bersahabat dengan kopi, dan menjadikan cinta bagi mereka yang tidak mencintainya.
          </p>
        </div> */}
      </section>

      <section id='menu' className='menu'>
        <h1>OUR MENU</h1>
        <div className="box-container">
          <a data-aos="zoom-in" data-aos-duration="2000" className="box">
            <img src={menu_palm} alt="" />
            <div className="content">
              <h3>Palm Sugar</h3>
              <p>Dengan gula dari nira pohon palem, menawarkan rasa karamel alami yang memanjakan.</p>
              <span>Rp 15.000</span>
            </div>
          </a>

          <a data-aos="zoom-in" data-aos-duration="2000" className="box">
            <img src={menu_butter} alt="" />
            <div className="content">
              <h3>Butterscotch</h3>
              <p>Kombinasi manis dari permen butterscotch, memberikan rasa kaya dan buttery.</p>
              <span>Rp 17.000</span>
            </div>
          </a>

          <a data-aos="zoom-in" data-aos-duration="2000" className="box">
            <img src={menu_hazelnut} alt="" />
            <div className="content">
              <h3>Hazelnut</h3>
              <p>Tambahan kacang hazelnut yang manis dan buttery, menciptakan pengalaman rasa yang kaya dan creamy.</p>
              <span>Rp 17.000</span>
            </div>
          </a>

          <a data-aos="zoom-in" data-aos-duration="2000" className="box">
            <img src={menu_vanila} alt="" />
            <div className="content">
              <h3>Vanilla</h3>
              <p>Diinfus dengan bumbu aromatik dari biji polong vanilla, menghadirkan aroma yang menggoda.</p>
              <span>Rp 17.000</span>
            </div>
          </a>

          <a data-aos="zoom-in" data-aos-duration="2000" className="box">
            <img src={menu_caramel} alt="" />
            <div className="content">
              <h3>Caramel</h3>
              <p>Disiram dengan saus caramel untuk rasa manis yang seimbang.</p>
              <span>Rp 17.000</span>
            </div>
          </a>

          <a data-aos="zoom-in" data-aos-duration="2000" className="box">
            <img src={menu_pandan} alt="" />
            <div className="content">
              <h3>Pandan</h3>
              <p>Diperkaya dengan daun pandan harum, memberikan sentuhan rasa yang unik dan menyegarkan.</p>
              <span>Rp 17.000</span>
            </div>
          </a>

          <a data-aos="zoom-in" data-aos-duration="2000" className="box">
            <img src={menu_banana} alt="" />
            <div className="content">
              <h3>Banana</h3>
              <p>kopi yang creamy dengan pisang manis, kaya nutrisi dan ideal untuk sarapan.</p>
              <span>Rp 17.000</span>
            </div>
          </a>

          <a data-aos="zoom-in" data-aos-duration="2000" className="box">
            <img src={menu_roasted} alt="" />
            <div className="content">
              <h3>Roasted Almond</h3>
              <p>Disajikan dengan taburan almond panggang, memberikan aroma dan rasa kacang yang lebih kaya.</p>
              <span>Rp 17.000</span>
            </div>
          </a>
        </div>
      </section>

      <section id="review" className="review">
        <h1>REVIEW</h1>
        <div className="container-review">
          <img data-aos="zoom-in" data-aos-duration="2000" src={review1} alt="" />
          <img data-aos="zoom-in" data-aos-duration="2000" src={review2} alt="" />
          <img data-aos="zoom-in" data-aos-duration="2000" src={review3} alt="" />
          <img data-aos="zoom-in" data-aos-duration="2000" src={review4} alt="" />
        </div>

      </section>

      {/* FOOTER */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>our branches</h3>
            <a> <FontAwesomeIcon icon={faArrowRight} /> <span>indonesia</span></a>
            <a> <FontAwesomeIcon icon={faArrowRight} /> <span>jakarta</span></a>
            <a> <FontAwesomeIcon icon={faArrowRight} /> <span>bogor</span></a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#home"> <FontAwesomeIcon icon={faArrowRight} /> <span>home</span></a>
            <a href="#about"> <FontAwesomeIcon icon={faArrowRight} /> <span>about</span></a>
            <a href="#menu"> <FontAwesomeIcon icon={faArrowRight} /> <span>menu</span></a>
            <a href="#review"> <FontAwesomeIcon icon={faArrowRight} /> <span>review</span></a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a><FontAwesomeIcon icon={faPhone} /> <span>+62-877-8008-3412</span></a>
            <a><FontAwesomeIcon icon={faEnvelope} /> <span>coffeeRaden@gmail.com</span></a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href='https://www.instagram.com/radenmaskopi.id/'><FontAwesomeIcon icon={faFacebookF} /> <span>radenmas_kopi</span></a>
            <a href='https://www.instagram.com/radenmaskopi.id/'><FontAwesomeIcon icon={faInstagram} /> <span>radenmaskopi.id</span></a>
          </div>
        </div>
      </section>
      <div className='copyright'>
        <p>Copyright ©2024 Radenmas Kopi | Radenmas kopi. Developed by @reyan_fadil. All Rights Reserved.</p>
      </div>
    </div>
  )
}
