import GeneralText from "../../Components/GeneralText/GeneralText";
import Values from "../../Components/Values/Values";
import StaffIntro from "../../Components/StaffIntro/StaffIntro";
import TestimonialVideo from "../../Components/TestimonialVideo/TestimonialVideo";
import LogoCaro from "../../Components/LogoCarousel/LogoCarousel";
import ContactForm from "../../Components/ContactForm/ContactForm";
import EmailSignup from "../../Components/EmailSignup/EmailSignup";
import heroAbout from "../../assets/images/hero_about.png";
import imgDre from "../../assets/images/img_dre.png";

import R2017 from "../../assets/images/R2017.png";
import R2018 from "../../assets/images/R2018.png";
import R2020 from "../../assets/images/R2020.png";
import R2021 from "../../assets/images/R2021.png";
import { Link } from 'react-router-dom';
import "./About.scss";

import threeM from "../../assets/images/3M.png";

function About() {

  return (
    <>
      <section className="heroabout">
        <img src={heroAbout} className="heroabout__image" alt="" />
      </section>
      <GeneralText
        title={"ABOUT US"}
        text={
          "Our passion is cars, and our mission is to improve and protect the appearance of your car for the many miles ahead"
        }
      />

      <div className="meetdre">
        <div className="meetdre__imagebox">
          <img className="meetdre__image" src={imgDre}></img>
        </div>
        <div className="meetdre__textbox">
            <h3 className="meetdre__title">MEET THE FOUNDER</h3>
            <div className="meetdre__divider"></div>
            <h4 className="meetdre__name">Andre Cordeiro</h4>
            <h5 className="meetdre__subtitle">FOUNDER</h5>
            <p className="meetdre__description">Andre is the founder of Dre's Auto Detailing. Andre fell in love with cars  at an early age which led him to start his own business in 2016. Now, Dre is known as the go-to guy for luxury vehicle detailing</p>
        </div>
      </div>

      <div className="voted">
        <div className={"voted__content"}>
        <h3 className="voted__name"><span className="yellow">VOTED #1 IN KW</span></h3>
          <div className="voted__imagebox">
            <img className="voted__image" src={R2017} alt="" />
            <img className="voted__image" src={R2018} alt="" />
            <img className="voted__image" src={R2020} alt="" />
            <img className="voted__image" src={R2021} alt="" />
          </div>
          
          <div className="voted__contentBox">
            
            <h4 className="voted__subtext">
              We are honoured to have received the 2017, 2018, and 2020 Record Reader Awards. These awards are dedicated to our hardworking team and our awesome clients. Thank you for your continued support!
            </h4>

            <Link to="/about">
              <button className="voted__button">BOOK APPOINTMENT</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="logostitle__cont">
        <h3 className="logostitle__text">BRANDS WE USE</h3>
      </div>
      <LogoCaro        
      />

      <ContactForm />
    </>
  );
}

export default About;
