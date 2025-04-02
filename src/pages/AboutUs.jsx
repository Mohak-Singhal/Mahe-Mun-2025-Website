import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutUs.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const AboutUs = () => {
  const galleryImages = [
    '/event1.jpg',
    '/event2.jpg',
    '/event3.jpg',
    '/event4.jpg',
    '/event5.jpg',
    '/event6.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar classname="text-white bg-black " />

      {/* Hero Section */}
      <section className="hero-section mt-20 md:mt-28 ">
        <div className="hero-overlay">
          <h1>Shaping Global Leaders of Tomorrow</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="introduction-section">
        <div className="content">
          <h2>About MAHE MUN 2025</h2>
          <p>
            MAHE Model United Nations (MUN) is a premier conference that brings together students from diverse backgrounds to simulate the workings of the United Nations. Our mission is to foster diplomacy, critical thinking, and leadership among the youth.
          </p>
        </div>
        <div className="image">
          <img src="/conference.jpg" alt="MAHE MUN Conference" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <h2>Our Mission & Vision</h2>
        <div className="values">
          <div className="value">
            <i className="icon-leadership"></i>
            <h3>Leadership</h3>
            <p>Empowering individuals to take initiative and drive change.</p>
          </div>
          <div className="value">
            <i className="icon-diplomacy"></i>
            <h3>Diplomacy</h3>
            <p>Promoting peaceful negotiations and mutual understanding.</p>
          </div>
          <div className="value">
            <i className="icon-education"></i>
            <h3>Education</h3>
            <p>Encouraging continuous learning and intellectual growth.</p>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="committees-section">
        <h2>Committees</h2>
        <div className="committees">
          <div className="committee">
            <img src="/unsc.png" alt="UNSC" />
            <h3>UN Security Council</h3>
            <p>Addressing global security challenges and maintaining peace.</p>
          </div>
          <div className="committee">
            <img src="/who.png" alt="WHO" />
            <h3>World Health Organization</h3>
            <p>Tackling international public health issues.</p>
          </div>
          {/* Add more committees as needed */}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Gallery</h2>
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"MAHE MUN was a transformative experience that enhanced my public speaking skills."</p>
            <h4>-Hemanth</h4>
          </div>
          <div className="testimonial">
            <p>"The conference provided deep insights into global issues."</p>
            <h4>— Aditya </h4>
          </div>
          {/* Add more testimonials */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Join Us for MAHE MUN 2025!</h2>
        <p>Be a part of an enriching experience that shapes future leaders.</p>
        <a href="/register" className="cta-button">Register Now</a>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;