import Carousel, { consts } from 'react-elastic-carousel';
import icnLeft from '../../assets/icons/icn_leftArrowTwo.svg';
import icnRight from '../../assets/icons/icn_rightArrowTwo.svg';
import './LogoCarousel.scss';

import threeM from "../../assets/images/3M.png";
import threeD from "../../assets/images/3d.png"
import bigboi from "../../assets/images/bigboi.png";
import feynlab from "../../assets/images/feynlab.png";
import igl from "../../assets/images/igl coatings.png";
import rupes from "../../assets/images/rupes.png";

import suntek from "../../assets/images/suntek.png";
import xpel from "../../assets/images/Xpel.png";
import { Link } from 'react-router-dom';



function LogoCaro(props) {
  const logos=[
    {
      image: threeD,
      link: 'https://google.com'
    },
    {
      image: threeM,
      link: 'https://www.3m.com'
    },
    {
      image: feynlab,
      link: 'https://www.feynlab.com'
    },
    {
      image: bigboi,
      link: 'https://ibigboi.com'
    },
    {
      image: igl,
      link: 'https://iglcoatingscanada.com'
    },
    {
      image: rupes,
      link: 'https://www.rupes.com'
    },
    {
      image: suntek,
      link: 'https://suntekfilms.com'
    },
    {
      image: xpel,
      link: 'https://www.xpel.com'
    }
  ]

	const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1024, itemsToShow: 3},
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    let pointer = (type === consts.PREV) ? icnLeft : icnRight;
    return (
      <button
        className='carouselGeneral__button'
        onClick={onClick}
        disabled={isEdge}
      >
        <img className='carouselGeneral__buttonimage' src={pointer} alt="" />
      </button>
    )
  }

  const renderText = () => {
    if (logos) {
      let renderedText = logos.map((logo) => {
        return (
          <div className='LogoCarousel__item'>
            <a target="_blank" href={logo.link}>
              <img className='LogoCarousel__logo'src={logo.image}></img>
            </a>
          </div>
        );
      });
      return renderedText;
    }
  }

  return (

    

    <section className='LogoCarousel'>
      
      <Carousel
        breakPoints={breakPoints}
        itemsToShow={1}
        renderArrow={myArrow}
        pagination={false}
        className='carouselGeneral__carousel'
      >
        {renderText()}
      </Carousel>

    </section>
  );
}

export default LogoCaro;
