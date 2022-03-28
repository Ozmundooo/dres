import { firestore } from '../../firebase.js';
import contactmap from '../../assets/images/contactmap.png'
import './ContactForm.scss';

function ContactForm() {

    function sendMessage(name, email, message) {
      //sends the name, email and message by passing them as url parameters
      window.location.href =
        "https://us-central1-naishare.cloudfunctions.net/sendMail?name=" +
        name +
        "&email=" +
        email +
        "&message=" +
        message +
        "";
    }
  const submitHandler = (e) => {
    e.preventDefault();
    sendMessage(e.target.name.value, e.target.email.value, e.target.message.value)
    firestore.collection('mail').doc().set({
      to: [`info.jarealty@gmail.com`],
      message: {
        html: `
          <h3>Name: ${e.target.name.value}</h3>
          <h3>Email: ${e.target.email.value}</h3>
          <h3>Location: ${e.target.location.value}</h3>
          <h3>Message:</h3>
          <p>${e.target.message.value}</p>
        `,
        subject: 'IMPORTANT: Consultation Call (Inbound Inquiry: Website)',
        text: `
          Name: ${e.target.name.value}
          Email: ${e.target.email.value}
          Location: ${e.target.location.value}
          Message:
          ${e.target.message.value}
        `,
      }
    })
      .then(res => {
        console.log('Success');
        e.target.reset();
        window.alert('Submitted!');
      })
      .catch(err => {
        console.log('err');
        console.log(err);
      });
  }

  return (
    <section className='contactform'>
      <div className='contactform__textbox'>
      <h3 className="contactform__title"><span className="yellow">Voted #1 In KW</span></h3>
      <br></br> 
        <h4 className="contactform__subtext">
          636 Colby Drive Unit 7B, Waterloo. ON
          <br></br>
          <br></br>
          Monday — 9AM-5PM <br></br>
          Tues-Fri — 9AM-5PM <br></br>
          Saturday — 9AM-5PM <br></br>
          Sunday — Closed
        </h4>
        <img className="contactform__image" src={contactmap}></img>
      </div>
      <form className='contactform__form' onSubmit={(e) => submitHandler(e)}>
        <label className='contactform__label' htmlFor="name">Enter your name *</label>
        <input
          className='contactform__textinput'
          type="text"
          name='name'
          required={true}
        />
        <label className='contactform__label' htmlFor="email">Enter your email *</label>
        <input
          className='contactform__textinput'
          type="email"
          name='email'
          required={true}
        />
        <label className='contactform__label' htmlFor="email">Enter who reffered you</label>
        <input
          className='contactform__textinput'
          type="text"
          name='reffered'
          required={false}
        />

        <label className='contactform__label' htmlFor="carinfo">Enter your car info *</label>
        <textarea className='contactform__textarea' name="carinfo" required={false}></textarea>
        <br></br>
        <label className='contactform__label' htmlFor="message">Enter your message *</label>
        <textarea className='contactform__textarea' name="message" required={true}></textarea>
        <button className='contactform__button' type='submit'>SUBMIT</button>
      </form>
    </section>
  );
}

export default ContactForm;
