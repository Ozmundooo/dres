import Carousel, { consts } from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

import icnLeft from '../../assets/icons/icn_leftArrow.svg';
import icnRight from '../../assets/icons/icn_rightArrow.svg';
import ServiceCard from '../ServiceCard/ServiceCard';
import './ServiceCaro.scss';

function ServiceCaro(props) {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 630, itemsToShow: 1 },
    { width: 1024, itemsToShow: 1 },
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

  const renderImages = () => {
    if (props.services) {
      let renderedImages = props.services.map(service => {
        
          return (
            <ServiceCard
              title= {service.title}
              subtitle={service.subtile}
              description={service.description}
              link= {service.link}
              price = {service.price}
              image= {service.image}
            />
          );
        }
      );
      return renderedImages;
    }
  }

  return (
    <section className='carouselGeneral'>
      <h2 className='carouselGeneral__title'>{props.title}</h2>
      <Carousel
        breakPoints={breakPoints}
        renderArrow={myArrow}
        pagination={false}
        className='carouselGeneral__carousel'
      >
        {renderImages()}
      </Carousel>
    </section>
  );
}

export default ServiceCaro;
