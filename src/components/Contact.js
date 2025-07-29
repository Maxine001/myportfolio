import React, { useState } from 'react';
import emailIcon from "../assets/emailIcon.png"
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "maxine001@gmail.com";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
    });
  };

  React.useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <footer className='contact__container' id="contact">
      <div className="contact__content">
        <div className="contact__text">
          <h2>Contact</h2>
          <p>Feel free to reach out</p>
        </div>
        <ul className='contact__links'>
          <li className='contact__link'> 
            <img src={emailIcon} alt=""/>
            <p className='contact_link'
              onClick={(e) => {
                e.preventDefault();
                copyEmailToClipboard();
              }}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
              aria-label="Copy email to clipboard"
            >
              {email}
            </p>
          </li>
          <li className='contact__link'> 
            <img src={linkedinIcon} alt=""/>
            <a href='https://www.linkedin.com/in/malcolm-nnamdi-853861292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_'>mylinkdinprofile</a>
          </li>

          <li className='contact__link'> 
            <img src={githubIcon} alt=""/>
            <a href='https://github.com/Maxine001'>github.com</a>
          </li>
        </ul>
      </div>

      {copied && (
        <div className="toaster toaster--visible">
          Copied to clipboard!
        </div>
      )}
    </footer>
  )
}

export default Contact
