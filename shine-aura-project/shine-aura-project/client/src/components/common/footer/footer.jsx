import React from 'react';
import "./footer.css";
import Logo from '../../../assets/img/logo.svg';
import Button from '../button/button';

const Footer = () => {
  return (
    <div className="footer align-left flex-center-align flex-row  ">
      <div className="footer-logo flex-col ">
        <img className="footer-vector-icon" alt="" src={Logo} />
      </div>
      <div className="footer-container flex-row align-left ">
        <div className="footer-sitemap flex-col align-left gap-2xs">
          <div className="footer-sitemap-title h4">
            <p>Sitemap</p> <hr />
          </div>
          <div className=" flex-col footer-sitemap-content align-left ">
            <div className="footer-button">
              <Button text="Home" btnStyle="footer-btn"/>
            </div>  
            <div className="footer-button">
              <Button text="Product" btnStyle="footer-btn"/>
            </div>
            <div className="footer-button">
              <Button text="Collection" btnStyle="footer-btn"/>
            </div>
            <div className="footer-button">
              <Button text="Contact" btnStyle="footer-btn"/>
            </div>
            <div className="footer-button">
              <Button text="Term & Condition"btnStyle="footer-btn" />
            </div>
          </div>
        </div>
      </div>
        <div className="footer-collection flex-col align-left gap-2xs">
          <div className="footer-collection-title h4">
            <p>Collections</p> <hr />
          </div>
          <div className=" footer-collection-content flex-row align-left flex-left-align  ">
            <div className="footer-button-left flex-left-align  flex-col align-left gap-2xs  ">
              <div className="footer-button">
              <Button text="Cleanser"btnStyle="footer-btn" />
            </div>
              <div className="footer-button">
              <Button text="Sunscreen Cream"btnStyle="footer-btn" />
            </div>
              <div className="footer-button">
              <Button text="Moisturizer" btnStyle="footer-btn" />
            </div>
              <div className="footer-button">
                <Button text="Mask" btnStyle="footer-btn"/>
              </div>
              <div className="footer-button">
              <Button text="Mask" btnStyle="footer-btn" />
            </div>
            </div>
            <div className="footer-button-right flex-col align-left gap-2xs">
              <div className="footer-button">
                <Button text="Lipstick" btnStyle="footer-btn" />
              </div>
              <div className="footer-button">
                <Button text="Foundation "btnStyle="footer-btn" />
              </div>
              <div className="footer-button">
                <Button text="Face Powder " btnStyle="footer-btn"/>
              </div>
              <div className="footer-button">
                <Button text="Mascara "btnStyle="footer-btn" />
              </div>
              <div className="footer-button">
                <Button text="Eyeshadow "btnStyle="footer-btn" />
              </div>
              <div className="footer-button">
                <Button text="Blush " btnStyle="footer-btn"/>
              </div>
              <div className="footer-button">
                <Button text="Eyeliner " btnStyle="footer-btn"/>
              </div>
            </div>
          </div>
        </div>
      <div className="footer-contact flex-col align-left gap-2xs">
      <div className="footer-contact-title h4">
            <p>Contact Us</p> <hr />
          </div>
          <div className=" flex-col footer-contact-content align-left gap-xs">
          <div className='flex-row gap-xs body-lgt'>
                  <i className="bi bi-envelope"></i>
                  <p>shineaura.cosmetic@gmail.com</p>
                </div>
                <div className='flex-row gap-xs body-lgt'>
                  <i className=" bi bi-telephone"></i>
                  <p>+84 123 456 789</p>

                </div>
                <div className='flex-row gap-xs body-lgt '>
                  <i className="bi bi-geo-alt"></i>
                  <p>Thu Duc Viet Nam</p>
                </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;