import GeneralText from "../../Components/GeneralText/GeneralText";
import Values from "../../Components/Values/Values";
import StaffIntro from "../../Components/StaffIntro/StaffIntro";
import TestimonialVideo from "../../Components/TestimonialVideo/TestimonialVideo";
import ContactForm from "../../Components/ContactForm/ContactForm";
import EmailSignup from "../../Components/EmailSignup/EmailSignup";
import heroAbout from "../../assets/images/hero_home.png";
import imgDre from "../../assets/images/img_dre.png";
import RC2020 from "../../assets/images/RC2020.png";
import { Link } from 'react-router-dom';
import "./About.scss";

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
          <img className="voted__image" src={RC2020} alt="" />
          <div className="voted__contentBox">
            <h3 className="voted__name"><span className="yellow">Voted #1 In KW</span></h3>
            <h4 className="voted__subtext">
              We are honoured to have received the 2017, 2018, and 2020 Record Reader Awards. These awards are dedicated to our hardworking team and our awesome clients. Thank you for your continued support!
            </h4>

            <Link to="/about">
              <button className="voted__button">LEARN MORE</button>
            </Link>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
}

export default About;
