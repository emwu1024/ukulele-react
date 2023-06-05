import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Guides</h2>
              <a href="/">Buying Guide</a>
              <a href="/">Tuning Guide</a>
              <a href="/">Strumming Guide</a>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Need Help?</h2>
              <a href="/">FAQs</a>
              <a href="/">Chord Charts</a>
              <a href="/">Tips and Tricks</a>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <a href="/">Other Websites</a>
              <a href="/">Youtube</a>
              <a href="/">Email</a>
            </div>
          </div>
        </div>
        <div className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <a href="/" id="footer-logo">
                <i className="fa-solid fa-guitar"></i>Ukulele Central
              </a>
            </div>
            <p className="website-rights">
              UKULELE CENTRAL 2023. Made by Emily Wu
            </p>
            <div className="social-icons">
              <a href="/" className="social-icon-link" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/" className="social-icon-link" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="social-icon-link" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-icon-link" target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
