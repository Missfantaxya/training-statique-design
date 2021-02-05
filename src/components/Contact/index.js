// == Import npm
import React from "react";

// == Import
import "./styles.scss";
import email from "src/assets/images/email.svg";
import linkedin from "src/assets/images/linkedin.svg";

// == Composant
const Contact = () => (
  <div className="contact">
    <div className="contact__subTitle">
      <p>Mon travail vous intéresse ? </p>
      <p>N'hésitez pas à me contacter.</p>
    </div>
      <div className="contact__contacts">
      <a className="contact__link" href="mailto:alexia.skrzypczak@gmail.com">
        <img className="contact__icone" src={email} alt="" />M'envoyer un mail
        </a>
      
        <a className="contact__link" href="www.linkedin.c
  om/in/alexiaskrzypczak">
        <img className="contact__icone" src={linkedin} alt="" /> Ma page Linkedin
        </a>
      </div>
  </div>
);

// == Export
export default Contact;
