// export default AboutCompany;
import React from "react";
import "./Home_About_Company.css";
import ceo from "../../assets/ceo.png";


const Home_About_Company = () => {
  return (
    <div className="about-container">
      <h2>ABOUT MANTHAN IT SOLUTIONS</h2>
      <p>
        MANTHAN IT SOLUTIONS is a leading technology company specializing in 
        innovative software solutions. We provide cutting-edge services in web 
        development, mobile applications, AI solutions, and enterprise software.
      </p>
      <p>
        Our mission is to empower businesses with scalable and efficient 
        technological solutions, ensuring growth and success in the digital era.
      </p>

      <h3>Our Learning Platform</h3>
      <p>
        We offer a dedicated learning platform that helps developers and 
        professionals upgrade their skills with industry-relevant courses 
        and real-world projects.
      </p>

      {/* CEO Section */}
      <div className="ceo-section">
      <img src={ceo} alt="CEO" className="ceo-image" />
      <div className="ceo-info">
          <h3 className="ceo-name">Mr. John Doe - CEO</h3>
          <p>
            Mr. John Doe is an industry expert with 20+ years of experience in software 
            development and business strategy. Under his leadership, MANTHAN IT SOLUTIONS 
            has achieved remarkable growth and continues to innovate in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home_About_Company;

// frontend\src\assets\ceo.png
// frontend\src\components\HomePage\Home_About_Company.jsx