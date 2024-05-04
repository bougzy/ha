import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TradingViewWidget from './TradingViewWidget';
import './Home.css'; // Import the CSS file for additional styling
import UserComponent from './UserComponent';
// import Chat from './Chat';

import VideoPlayer from './VideoPlayer';
import ContactForm from './Contact';
// import TidioChatWidget from './TidioChatWidget';

const Home = () => {
  return (
    <Container className="home-container">
      <Row className="header-section p-5 h-50" style={{ backgroundImage: 'url("data:image/jpeg;base64,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")', 
      backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Col>
          <h1 className="text-white fw-bold">Financial Grants Platform</h1>
          <p className="text-white fw-bold">Your gateway to the world of finance and investment</p>
          <Button variant="warning">
            <Link to="/login" className="text-decoration-none text-black">
              Get Started
            </Link>
          </Button>
        </Col>
      </Row>

      <Row className="align-items-center shadow-sm p-3 mb-5 rounded">
        <Col md={6} className="bg-light">
          <h2 className="">Features</h2>
          <ul>
            <li>Real-time financial Market Data</li>
            <li>User-Friendly Interface</li>
            <li>Secure and Transparent Transactions</li>
            {/* Add more features as needed */}
          </ul>
          <p>
            Stay ahead of the curve with our real-time market data. We understand the importance of timely and accurate 
            information in the fast-paced financial sector. Our platform empowers you with live updates on prices, trading volumes, and market trends. Whether you are a seasoned 
            trader or just getting started, access to real-time data ensures that you can make informed decisions at the right moment.
          </p>
          <p>
            Security is paramount in the world of finance, and we prioritize the protection of your assets. 
            Our platform employs state-of-the-art security measures, including encryption protocols and multi-factor authentication, 
            to safeguard your funds and personal information. Moreover, we uphold transparency in every transaction, providing you with 
            clear and detailed records. Our commitment to security and 
            transparency is aimed at fostering trust and confidence in your journey.
          </p>
        </Col>
        <Col md={6}>
          <img src="https://media.istockphoto.com/id/1323542329/photo/woman-is-checking-bitcoin-price-chart-on-digital-exchange-on-smartphone-cryptocurrency-future.jpg?b=1&s=612x612&w=0&k=20&c=DeTtr-uAixs-rzxFAOx6FVHrYqn0-at2_ZKcH19EcYs=" alt="Crypto Trading" className="feature-image" />
        </Col>
      </Row>

      <Row className="about-section bg-light shadow-sm p-3 mb-5 rounded m-4">
        <Col>
          <h2 className="text-center mt-3">About Us</h2>
          <p>
            Welcome to Coin Market Cap Limited, your trusted partner in the world of financial grants and investment. Founded on the principles of innovation, transparency, and financial empowerment, we aim to redefine the way individuals and institutions engage with the rapidly evolving landscape of digital assets.
          </p>
        </Col>
      </Row>
      <Row className="about-section bg-light shadow-sm p-3 mb-5 rounded m-4">
        <Col>
          <h2  className="text-center mt-3">Our Mission</h2>
          <p>
            At Coin Market Cap Limited, our mission is to provide accessible and secure solutions for financial grant enthusiasts and investors alike. We believe in fostering a global community that embraces the potential of blockchain technology and empowers individuals to take control of their financial future.
          </p>
        </Col>
      </Row>

      <div className="container">
        <img src="https://images.pexels.com/photos/6772024/pexels-photo-6772024.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="w-100 rounded shadow-sm  mb-5" 
          alt="image" />
      </div>

      <Row className="about-section bg-light shadow-sm p-3 mb-5 rounded m-4">
        <Col>
          <h2  className="text-center mt-3">Why Choose Us</h2>
          <p>
            Expertise in Finanacial Grant
            Our team comprises seasoned experts with a deep understanding of the financial sector. We leverage this expertise to deliver real-time insights, advanced trading tools, and comprehensive educational resources to our users.

            Cutting-edge Technology
            We stay ahead of the curve by implementing cutting-edge technology to ensure a seamless and secure trading experience. Our platform is designed to meet the needs of both novice traders and seasoned professionals, offering an intuitive interface paired with advanced features.

            Commitment to Security
            Security is paramount in the space, and we take it seriously. Coin Market Cap Limited employs state-of-the-art security measures to safeguard your assets, providing you with peace of mind as you navigate the world of digital finance
          </p>
        </Col>
      </Row>
      <Row className="about-section bg-light shadow-sm p-3 mb-5 rounded m-4">
        <Col>
          <h2  className="text-center mt-3">Our Vision</h2>
          <p>
            As we look to the future, our vision is to be a global leader in financial sector, recognized for our commitment to innovation, integrity, and customer satisfaction. We strive to be at the forefront of industry advancements, shaping the future of finance through the democratization of digital assets.
          </p>
        </Col>
      </Row>
      <Row className="about-section bg-light shadow-sm p-3 mb-5 rounded m-4">
        <Col>
          <h2  className="text-center mt-3">Join Us On The Journey</h2>
          <p>
            Whether you are a seasoned trader or a newcomer to the fianancial grant space, Coin Market Cap Limited welcomes you to join us on this exciting journey. Explore the endless possibilities of digital finance, backed by a team dedicated to your success.

            Thank you for choosing Coin Market Cap Limited. Together, let's navigate the fascinating world of financial grants and unlock the potential of your financial journey.

            Coin Market Cap Limited Team
          </p>
        </Col>
      </Row>

      {/* Add more sections like testimonials, pricing, etc. based on your requirements */}
      <TradingViewWidget />
      <VideoPlayer videoUrl="https://www.youtube.com/watch?v=VYWc9dFqROI" />
      <ContactForm />
      <UserComponent />
      {/* <Chat /> */}
      {/* <TidioChatWidget /> */}
    </Container>
  );
};

export default Home;
