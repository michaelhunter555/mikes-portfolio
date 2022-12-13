import './Footer.scss';
import React from 'react';
import {FaHome, FaPhone, FaMailBulk,FaLinkedin, FaGithub} from 'react-icons/fa';



const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='my-loc'>
                    <FaHome
                    size={20}
                    style={{ 
                    color: 'white',
                    marginRight: '2rem'}} />
                    <div>
                      <p>Bangkok, Thailand</p>
                    </div>
                </div>
                <div className='phone'>
                  <FaPhone
                  size={20}
                  style={{ 
                  color: '#fff',
                  marginRight: '2rem'}} />
                    <p>+66 96-760-9099</p>
                </div>
                <div className='e-mail'>
                  <FaMailBulk
                  size={20}
                  style={{ 
                  color: 'white',
                  marginRight: '2rem'}} />
                    <p>Mike@michaelHunter.dev</p>
                </div>
            </div>
            
            <div className="right">
              <h4>About Me</h4>
              <p>
                My name is Michael Hunter, and I am passionate problem solver from the United States of America. I always accept a challenge and can be depended on to adapt to a team's needs or work independently.
              </p>
              <div className="social">
                <a href="https://www.linkedin.com/in/michael-h-hunter" className="linkedIn">
              <FaLinkedin
                  size={30}
                  style={{ 
                  color: '#0e76a8',
                  marginRight: '1rem'}} />
                  </a>
                  <a href="https://www.github.com/idioticbrilliance" className="github">
              <FaGithub
                  size={30}
                  style={{ 
                  color: 'white',
                  marginRight: '1rem'}} />
                  </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
