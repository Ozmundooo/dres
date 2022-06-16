import React from 'react';
import { firestore } from '../../firebase.js';
import { Link } from 'react-router-dom';



import CarouselGeneral from '../../Components/CarouselGeneral/CarouselGeneral';
import StaffIntro from '../../Components/StaffIntro/StaffIntro';
import Values from '../../Components/Values/Values';
import TestimonialText from '../../Components/TestimonialText/TestimonialText';
import EmailSignup from '../../Components/EmailSignup/EmailSignup';

import heroHome from '../../assets/images/hero_home.png';

import mobileservices from '../../assets/images/mobile_services_bg.png';
import services from '../../assets/images/services_bg.png';
import specialservices from '../../assets/images/specialty_service_bg.png';
import featured from '../../assets/images/featured_products_bg.png';
import imageAboutus from '../../assets/images/who_are_we.png';

import './Home.scss';
import HomeCaro from '../../Components/HomeCaro/HomeCaro.js';



function Home() {

  return (
    <>
     <div class="parallax hero">
      
    </div>

      {/* <img src={heroHome} className='herohome__image' alt="" /> */}

      {/* <section className='herohome'>
        <img src={heroHome} className='herohome__image' alt="" />
        <div className='herohome__contentbox'>
        </div>
      </section> */}

      {/* <CarouselGeneral
        linkSource={'property'}
        title={'Florida featured properties'}
        images={flListings}
      /> */}
      
      <div className='abouthome'>
        <StaffIntro
          image={imageAboutus}
          name={'Who We Are'}
          description={`With our cutting-edge equipment, techniques, and earth-friendly products to detail and maintain your vehicle, we are the local-leading auto detailing brand you can trust`}
        />
        
        <Values />
        
        </div>
        <div className='mobileservices'>
          <h3 className='mobileservices__title'>OUR SERVICES</h3>
          <HomeCaro
              testimonials={[
                {
                  name: 'Specialty services',
                  text: "We think of all the little details. Get your car ready for the season",
                  link: "/specialtyservices"
                },
                {
                  name: 'In-shop services',
                  text: "Take advantage of our tools, space and staff",
                  link: "/inshopservices"
                }
              ]}
            />
        </div>

        {/* <section className='herohome'>
          <img src={services} className='herohome__image' alt="" />
          <div className='herohome__contentbox'>
            <div className='homeServices'>
              <div className={'homeServices__content'}>
                <img className='homeServices__image' src={''} alt="" />
                <div className='homeServices__contentBox'>
                  <h3 className='homeServices__name'>SERVICES</h3>
                  <h4 className='homeServices__subtext'>Professional care <span className='yellow'>by car lovers</span></h4> 

                  <Link to='/inshopservices'>
                    <button className='homeServices__button'>LEARN MORE</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br></br>
        <section className='herohome'>
          <img src={specialservices} className='herohome__image' alt="" />
          <div className='herohome__contentbox'>
            <div className='homeServices'>
                <div className={'homeServices__content'}>
                  <img className='homeServices__image' src={''} alt="" />
                  <div className='homeServices__contentBox'>
                    <h3 className='homeServices__name'>SPECIALTY SERVICES</h3>
                    <h4 className='homeServices__subtext'>Get your vehicle <span className='yellow'>prepared for the season</span></h4> 

                    <Link to='/specialtyservices'>
                      <button className='homeServices__button'>LEARN MORE</button>
                    </Link>
                  </div>
                </div>
            </div>
            </div>
        </section> */}
        
        <TestimonialText
        testimonials={[
          {
            name: '- Grant Mihalcheon',
            text: "Andre has such a great attention to detail. Very professional work. If you're looking for one of the best detailers in the region Andre is your guy. From a simple wash to ceramic coating packages. Check out his Instagram website and you'll see what I mean."
          },
          {
            name: '- Brenda Shiner',
            text: "Best place to get your car detailed inside and out! My car looked brand new and smelled great! I had my car detailed in December and was worried about the moisture in my cloth interior. Andre gave me tips on how to solve that problem. Andre is the most polite and thoughtful person. The team there is awesome! Thank you!"
          },
          {
            name: '- Tyra Cabeldu',
            text: "I have been using Dre's Auto Detailing for quite a few years now. His work has always been above and beyond. I am extremely particular about my vehicles being detailed and he always exceeds my expectations. He has now detailed several of my vehicles and is always professional. I highly recommend using Dre for all detailing needs!"
          }
        ]}
      />
      <section className='herohome'>
          <img src={featured} className='herohome__image' alt="" />
          <div className='herohome__contentbox'>
          <div className='homeServices'>
                <div className={'homeServices__content'}>
                  <img className='homeServices__image' src={''} alt="" />
                  <div className='homeServices__contentBox'>
                    <h3 className='homeServices__name'>PURE WASH SOAP</h3>
                    <h3 className='homeServices__text'>PH Neutral Soap</h3>
                    <h4 className='homeServices__subtext homeServices__subtext--FP'>Cleanses your vehicle's exterior to uplift dirt and contaminants without stripping your exteriors protection</h4> 

                    <Link to='/specialtyservices'>
                      <button className='homeServices__button'>LEARN MORE</button>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </section>
  
    </>
  );
}

export default Home;
