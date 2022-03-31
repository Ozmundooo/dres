import React from 'react';
import { firestore } from '../../firebase.js';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'

import ServiceCard from '../../Components/ServiceCard/ServiceCard.js';

import heroHome from '../../assets/images/SS_hero.png';
import GeneralText from "../../Components/GeneralText/GeneralText";

import SS1 from '../../assets/images/SS_service1.png';
import SS2 from '../../assets/images/SS_service2.png';
import SS3 from '../../assets/images/SS_service3.png';
import SS4 from '../../assets/images/SS_service4.jpg';
import SS5 from '../../assets/images/SS_service5.jpg';

import './SService.scss';
function SService() {
  return (
    <>
      <section className='herohome'>
        <img src={heroHome} className='herohome__image' alt="" />
        <div className='herohome__contentbox'>
        </div>
      </section>
      <section className={'generaltext'}>
        <div className={'generaltext__content'}>
          <h3 className='generaltext__title'>SPECIALTY SERVICES</h3>
          <p className='generaltext__text'>Get your vehicle <span className='yellow'>prepared for the season</span></p>
        </div>
      </section>
      <ServiceCard
        title="Headlight Restoration"
        subtitle="Are your headlights losing their transparency, or turning dull in colour?"
        description="Improve the overall value and safety of your vehicle, especially when driving at night. Having clear headlights will allow for more light to be emitted, letting you see better"
        link="s"
        image= {SS1}
      />
      <ServiceCard
        title="Paint chip touch up"
        subtitle="A rock might have chipped the paint off your vehicle. This happens all the time "
        description="Wear & tear happens, but it can also be corrected. Through careful and detailed paint touch up, the Dre's team knows exactly how to bring your vehicle back to life"
        link="s"
        image= {SS2}
      />
      <ServiceCard
        title="Ceramic Coating protection"
        subtitle="Protect your vehicle’s beauty with our Ceramic Coating Protection service"
        description="This will keep your car looking like new, making your car glossy and cleaner due to mud and grime prevention"
        link="s"
        image= {SS3}
      />

      <ServiceCard
        title="fULL VEHICLE WRAP"
        subtitle="Looking to change the colour of your car? Don’t like the factory colour of your car? Choosing a full car wrap conversion is the greatest hit!"
        description="What is car wrapping? Car wrapping is the process of completely covering a vehicle's original paint with a durable vinyl wrap of a different colour or finish like a gloss, matte, or satin finish. We can transform your car into the colour you want! Wrapping your car is the most cost-effective way of changing the colour without the big repainting exposure. When it comes to wrapping your car we have over 200 vinyl wrap options to choose from so you can be the only one in the KW region with a unique colour to your taste! See some examples below!"
        link="s"
        image= {SS4}
      />

      <ServiceCard
        title="DENT REPAIR"
        subtitle="The PDR process is done through careful manipulation of the sheet metal from the backside with special tools."
        description="PDR is otherwise known as paintless dent repair. This is a process used by technicians to remove small dents from the vehicle without having to use paint or Bondo on the vehicle.  The technicians apply pressure and leverage to the backside of the panel and massage or work the dents out keeping the very valuable factory paint intact.  There is no sanding, body fillers, or painting involved"
        link="s"
        image= {SS5}
      />

      <section className={'generaltext'}>
        <div className={'generaltext__content'}>
          <h3 className='generaltext__title'><span className='yellow'>TINTING OPTIONS</span></h3>
          <p className='generaltext__text'>This service provides privacy from outside eyes, while giving your vehicle some style. Window tints filter incoming sunlight, protecting both passengers and interior surfaces from harmful UV rays, and reducing your vehicle’s interior temperature for a more comfortable driving experience</p>
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
export default SService;
