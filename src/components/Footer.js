import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
      <div className="left">
      <div className="location">
      <FaHome size={20} style={{color:"#fff", marginRight: "2rem"
      }} />
<div>
    <p>232107 Ramgarh Chandauli.</p>
    <p>INDIA-UP.</p>
</div>
</div>
<div className="phone">
    <h4>  <FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
     7880662615</h4>
</div>
<div className="email">
    <h4>  
    Vikasprajapati3802@gmail.com</h4>
</div>
 </div>



      <div className="right">
<h4>About the company</h4>
<p>This is me Vikas prajapati. Student of Dr.Rammanohar Lohia Awadh Univercity.
    Ayodhya.
    I enjoy discussing new project and design challenges.
</p>
<div className="social">
<FaFacebook 
  size={30}
   style={{color:"#fff" ,
   marginRight:"1rem"}}/>

<FaInstagram 
  size={30}
   style={{color:"#fff" ,
   marginRight:"1rem"}}/>

<FaLinkedin 
  size={30}
   style={{color:"#fff" ,
   marginRight:"1rem"}}/>

</div>
      </div>
        </div>   
    </div>
  )
}

export default Footer;
