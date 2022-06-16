import React from 'react';
import { firestore } from '../../firebase.js';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import ServiceCard from '../../Components/ServiceCard/ServiceCard.js';
import ServiceCaro from '../../Components/ServiceCaro/ServiceCaro.js';

import heroHome from '../../assets/images/IS_hero.png';
import GeneralText from "../../Components/GeneralText/GeneralText";

import pdf from '../../assets/DD_AfterCare.pdf'

import IS1 from '../../assets/images/IS_service1.png';
import IS2 from '../../assets/images/IS_service2.png';
import IS3 from '../../assets/images/IS_service3.png';
import IS4 from '../../assets/images/IS_service4.png';
import IS5 from '../../assets/images/Interiorcleaning2d4d.png';
import IS6 from '../../assets/images/InteriorTruckCleaning.png';
// import IS7 from '../../assets/images/Engine.png';

import './IService.scss';


function IService() {

  const services = [
    {
      title:"Maintenance of hand-washing to maintenance exterior handwashing",
      subtitle:"<strong>Included in this service:</strong> Door sills, trunk, hood sill, gas cap, wiper blades hand cleaned",
      description:"Pre-rinse, pH neutral foam bath, two bucket methods. Gentle hand wash, wheels, barrels, callipers decontaminated, ceramic hybrid detailer finish on painted surfaces, glass rims",
      warrenty: "Warrenty: Details",
      link:"s",
      price: "Starting at $79",
      image: IS1
    },
    {
      title:"Interior detailing (2DR, 4DR)",
      subtitle:"",
      description:"Includes a full vacuum of seats, floor, in-between seats, crevices, all surfaces top to bottom cleaned, conditioned, windows, floor mats, foot pedals cleaned, trunk extra",
      warrenty: "Warrenty: Details",
      link:"s",
      price: "Starting at $150",
      image: IS5
    },
    {
      title:"Interior detailing (SUV, Truck)",
      subtitle:"",
      description:"Includes a full vacuum of seats, floor, in-between seats, crevices, all surfaces top to bottom cleaned, conditioned, windows, floor mats, foot pedals cleaned, trunk extra",
      warrenty: "Warrenty: Details",
      link:"s",
      price: "Starting at $180 - VAN, Large SUVs, contact us",
      image: IS6
    },
    {
      title:"Interior cleaning",
      subtitle:"Give your car the clean it deserves",
      description:"When it comes to the interior of your car, we do much more than just vacuum and wipe down your dash… we get right into the details. We offer maintenance interior detailing packages to a full out interior rejuvenation. Allow our professional detailers do the magic. We utilise cutting edge equipment, techniques and voc compliant products that are safe for your vehicle to bring it back to new",
      warrenty: "Warrenty: Details",
      link:"s",
      price: "Starting at $150",
      image: IS2
    },
    {
      title:"Interior deep cleaning",
      subtitle:"Give your car the clean it deserves",
      description:"This happens often so don't feel left out. We can go as far as unbolting your seats to gain further access to imbedded crevices. We’re all about the details",
      warrenty: "Warrenty: Details",
      link:"s",
      price: "Starting at $50 for extra cleaning",
      image: IS3
    },
    {
      title:"Interior Steam cleaning",
      subtitle:"Your car’s interior will be spotless",
      description:"Steam treatment is a specialty method of hot vapour surface cleaning without the use of detailing products. Steam cleaning is very effective with uplifting up to 99% of bacteria, viruses and germs as well loosens imbedded dirt and grime in between crevices and surfaces. Steam treatment applies to all interior surfaces such as glass, door handles, steering wheel, seats, seat belts, dash, trim and carpet",
      warrenty: "Warrenty: Details",
      link:"s",
      price: "Starting at $60",
      image: IS4
    }
  ];
  return (
    <>
    <ParallaxProvider>
      <section className='herohome'>
        <Parallax className='herohome' translateY={['-100px', '70px']}>
        <img src={heroHome} className='herohome__image' alt="" />
        </Parallax>
        <div className='herohome__contentbox'>
        </div>
      </section>
      <section className={'generaltext'}>
        <div className={'generaltext__content'}>
          <h3 className='generaltext__title'>IN-SHOP SERVICES</h3>
          <p className='generaltext__text'><span className='yellow'>Don't want to leave your home?</span> We are able to pick up your vehicle and drop it off at your desired location for a fee</p>
          <br></br>
          <br></br>
          <br></br>
          <h3 className='generaltext__title'><span className='yellow'>ALLOW US TO BRING THE DETAILING TO YOU</span></h3>
        </div>
      </section>
      <ServiceCaro
        services = {services}
      />
  
      {/* <ServiceCard
        title="Interior deep cleaning"
        subtitle=""
        description="This happens often so don't feel left out. We can go as far as unbolting your seats to gain further access to imbedded crevices. We’re all about the details."
        link="s"
        image= {IS4}
      /> */}
      <div className='pdfButton__buttonbox'>
        <a href={pdf} target="_blank">
          <button className='pdfButton__button'>DOWNLOAD AFTER CARE PDF</button>
        </a>
      </div>
      
      <section className={'generaltext'}>
        <div className={'generaltext__content'}>
          <h3 className='generaltext__title'><span className='yellow'>DETAILING POLICY</span></h3>
          <p className='generaltext__text'>Please note rates are for vehicles in average condition. Any vehicle with excess soiling, need of extra cleaning, stains or pet hair will be an additional charge. Price may be subject to change upon visual inspection of the vehicle. We do our part in communicating with you with the needs of your vehicle.</p>
        </div>
      </section>
      <section className={'generaltext'}>
        <div className={'generaltext__content'}>
          <h3 className='generaltext__title'><span className='yellow'>ADD-ONS / TINTING OPTIONS</span></h3>
          <p className='generaltext__text'>This service provides privacy from outside eyes, while giving your vehicle some style. Window tints filter incoming sunlight, protecting both passengers and interior surfaces from harmful UV rays, and reducing your vehicle’s interior temperature for a more comfortable driving experience.<span className='yellow'> Starting at $165.00.</span></p>
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

      <div className='pdfButton__buttonbox'>
        <h3 className='generaltext__title'>HAVE A QUESTION?</h3>
        <Link to={pdf}>
          <button className='pdfButton__button'>CONTACT US</button>
        </Link>
      </div>
      </ParallaxProvider>
    </>
  );
}

export default IService;
