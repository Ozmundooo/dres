import experience from '../../assets/icons/experience.svg';
import convenience from '../../assets/icons/convenience.svg';
import communication from '../../assets/icons/communication.svg';
import passion from '../../assets/icons/passion.svg';
import './Values.scss';

function Values() {
  return (
    <section className='values'>
      <ul className='values__list'>
          <li className='valuecard'>
            <img className='valuecard__image' src={experience} alt="" />
            <h4 className='valuecard__title'>Experience</h4>
          </li>
          <li className='valuecard'>
            <img className='valuecard__image' src={convenience} alt="" />
            <h4 className='valuecard__title'>Convenience</h4>
          </li>
          <li className='valuecard'>
            <img className='valuecard__image' src={communication} alt="" />
            <h4 className='valuecard__title'>Communication</h4>
          </li>
          <li className='valuecard'>
            <img className='valuecard__image' src={passion} alt="" />
            <h4 className='valuecard__title'>Passion</h4>
          </li>
        </ul>
    </section>
  );
}

export default Values;
