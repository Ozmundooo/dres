import './ServiceCard.scss';

function ServiceCard(props) {
 
  return (
    <section className={'ServiceCard'}>
      <div className={'ServiceCard__content'}>
         <div className={'ServiceCard__imagebox'}>
             <img className={'ServiceCard__image'} src={props.image}></img>
         </div>
         <div className={'ServiceCard__textbox'}>
            <h3 className='ServiceCard__title' dangerouslySetInnerHTML={{__html: props.title}}></h3>
            <h3 className='ServiceCard__subtitle' dangerouslySetInnerHTML={{__html: props.subtitle}}></h3>
            <p className='ServiceCard__text'  dangerouslySetInnerHTML={{__html: props.description}}></p>
            <p className='ServiceCard__text yellow'  dangerouslySetInnerHTML={{__html: props.warrenty}}></p>
            <div className='ServiceCard__pricebox'>
            <h3 className='ServiceCard__price' dangerouslySetInnerHTML={{__html: props.price}}></h3>
            { 
                props.link ?
                <div className='ServiceCard__buttonbox'>
                    <a className='ServiceCard__link' href={props.link}>
                    <button className='ServiceCard__button'>BOOK APPOINTMENT</button>
                    </a>
                </div> :
                <></>
                }
            </div>
            </div>
         </div>
    </section>
  );
}

export default ServiceCard;