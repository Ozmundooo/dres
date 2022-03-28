import React from 'react';
import { firestore } from '../../firebase.js';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'

import ServiceCard from '../../Components/ServiceCard/ServiceCard.js';

import heroHome from '../../assets/images/IS_hero.png';
import GeneralText from "../../Components/GeneralText/GeneralText";

import IS1 from '../../assets/images/IS_service1.png';
import IS2 from '../../assets/images/IS_service2.png';
import IS3 from '../../assets/images/IS_service3.png';
import IS4 from '../../assets/images/IS_service4.png';
import './IService.scss';


function IService() {

  return (
    <>
      <section className='herohome'>
        <img src={heroHome} className='herohome__image' alt="" />
        <div className='herohome__contentbox'>
        </div>
      </section>
      <section className={'generaltext'}>
        <div className={'generaltext__content'}>
          <h3 className='generaltext__title'>IN-SHOP SERVICES</h3>
          <p className='generaltext__text'><span className='yellow'>Don't want to leave your home?</span> We are able to pick up your vehicle and drop it off at your desired location for a fee.</p>
          <br></br>
          <br></br>
          <br></br>
          <h3 className='generaltext__title'><span className='yellow'>ALLOW US TO BRING THE DETAILING TO YOU</span></h3>
        </div>
      </section>
      <ServiceCard
        title="Maintenance of Handwashing"
        subtitle="Basically like taking your car for a car wash, but you’re letting the pros handle it"
        description="Your vehicle will be treated to a top-to-bottom pre-rinse, two bucket method hand wash, Wheels, crevices, door jams, and gas cap all detailed."
        link=""
        image= {IS1}
      />
      <ServiceCard
        title="Interior cleaning"
        subtitle="Give your car the clean it deserves"
        description="Allow our professional detailers to rejuvenate the interior of your vehicle. We utilize VOC approved, Earth Friendly certified products to not only clean your vehicle, but ensure it stays clean."
        link="s"
        image= {IS2}
      />

      <ServiceCard
        title="Interior deep cleaning"
        subtitle="Give your car the clean it deserves"
        description="Give your car that “new feel” with this premium service. Your car’s interior will be professionally detailed, vacuumed, scrubbed, and wiped down to the fullest"
        link="s"
        image= {IS3}
      />

      <ServiceCard
        title="Interior Steam cleaning"
        subtitle="your car’s interior will be spotless"
        description="Steam cleaning will also sanitize it by killing 99% of bacteria which can cause odours and illnesses. The interior will be cleaner than ever, guaranteed."
        link="s"
        image= {IS4}
      />

      <section className={'generaltext'}>
        <div className={'generaltext__content'}>
          <h3 className='generaltext__title'><span className='yellow'>ADD-ONS / TINTING OPTIONS</span></h3>
          <p className='generaltext__text'>This service provides privacy from outside eyes, while giving your vehicle some style. Window tints filter incoming sunlight, protecting both passengers and interior surfaces from harmful UV rays, and reducing your vehicle’s interior temperature for a more comfortable driving experience.</p>
        </div>

      </section>
      <section className= 'iframe'>
      <Iframe url="https://ozmundooo.github.io/TintSim/"
          width="600px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
      </section>
    </>
  );
}

export default IService;
