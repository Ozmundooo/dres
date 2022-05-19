import Carousel, { consts } from 'react-elastic-carousel';
import icnRight from '../../assets/icons/homeArrowRight.svg';
import icnLeft from '../../assets/icons/homeArrowLeft.svg';
import { Link } from 'react-router-dom';
import './HomeCaro.scss';

function HomeCaro(props) {

	const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
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
        <img className='carouselGeneral__buttonimage--HomeCaro' src={pointer} alt="" />
      </button>
    )
  }

  const renderText = () => {
    if (props.testimonials) {
      let renderedText = props.testimonials.map(testimonial => {
        return (
          <div className='HomeCaro__item'>
            <h4 className='HomeCaro__name' dangerouslySetInnerHTML={{__html: testimonial.name}}></h4>
            <p className='HomeCaro__text' dangerouslySetInnerHTML={{__html: testimonial.text}}></p>
            <br></br>
            <Link to={testimonial.link}>
              <button className='HomeCaro__button'>LEARN MORE</button>
            </Link>
          </div>
        );
      });
      return renderedText;
    }
  }

  return (
    <section className='HomeCaro'>
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

export default HomeCaro;
