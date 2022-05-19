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



function LogoCaro(props) {

  const logos=[threeD, threeM, bigboi, feynlab, igl, rupes,suntek, xpel];

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
            <img className='LogoCarousel__logo'src={logo}></img>
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
