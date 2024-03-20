import React from 'react';
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s5.png";
import s4 from "../assets/images/s4.png";
import s6 from "../assets/images/s6.png";
import '../assets/css/About.css';
import Nav from './Nav';
import Footer from './Footer'; 

export default function About() {
  return (
    <>
      <Nav />
      <div className="about-container">
        <div className="image-container">
          <img className="a1" src={s1} alt="About Us" />
        </div>
        <div className="content">
          <h2>Our Cruise</h2>
          <p>
            The Celestial Cruise line has a rich history dating back several decades, originating from humble beginnings as a family-owned operation catering to local travelers. Over the years, Celestial has grown into a renowned name in the cruising industry, known for its commitment to excellence, luxury, and unparalleled service. From its inaugural voyages to its present-day fleet of state-of-the-art ships, Celestial has continued to innovate and redefine the cruising experience.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="content">
          <h2>Our Services</h2>
          <p>
            At Celestial, we pride ourselves on delivering exceptional service that exceeds expectations. Our dedicated crew members are committed to ensuring your cruise experience is nothing short of perfection, from the moment you step on board until your return home. Whether you require assistance with reservations, special requests, or simply a friendly smile, our attentive staff is here to make your journey unforgettable.
          </p>
        </div>
        <div className="image-container">
          <img className="a1" src={s2} alt="About Us" />
        </div>
      </div>
      <div className="about-container">
        <div className="image-container">
          <img className="a1" src={s3} alt="About Us" />
        </div>
        <div className="content">
          <h2>Luxury Accommodations</h2>
          <p>
            Step aboard a Celestial cruise and experience luxury like never before. Our meticulously designed ships boast a range of elegant accommodations, from spacious suites with private balconies to cozy interior staterooms, each offering unparalleled comfort and style. Indulge in world-class amenities, personalized service, and breathtaking ocean views as you sail to some of the world's most captivating destinations.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="content">
          <h2>Exciting Activities</h2>
          <p>
            Experience endless excitement and adventure with Celestial's array of onboard activities and entertainment options. From thrilling water sports and exhilarating shore excursions to relaxing spa treatments and captivating live performances, there's never a dull moment on a Celestial cruise. Whether you're seeking relaxation, adventure, or cultural immersion, our expertly curated itineraries offer something for everyone.
          </p>
        </div>
        <div className="image-container">
          <img className="a1" src={s4} alt="About Us" />
        </div>
      </div>
      <div className="about-container">
        <div className="image-container">
          <img className="a1" src={s6} alt="About Us" />
        </div>
        <div className="content">
          <h2>Book Your Celestial Cruise Today</h2>
          <p>
            Join us on a voyage of a lifetime and discover the beauty, luxury, and adventure awaiting you with Celestial Cruises. Explore our range of itineraries, destinations, and special offers, and book your dream cruise today. Set sail with Celestial and embark on an unforgettable journey to some of the world's most enchanting destinations.
          </p>
        </div>
      </div>
       <Footer />  
    </>
  );
}
