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
                { props.link ?
                <div className='ServiceCard__buttonbox'>
                    <a className='ServiceCard__link' href={props.link}>
                    <button className='ServiceCard__button'>BOOK APPOINTMENT</button>
                    </a>
                </div> :
                <></>
                }
            </div>
         </div>
    </section>
  );
}

export default ServiceCard;