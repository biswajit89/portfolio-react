import React, { useRef } from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xycmc68', 'template_3n7enet', form.current, 'xfTthS3cnYIJYraB2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h5>biswajitnath.iit@gmail.com</h5>
            <a href="mailto:biswajitnath.iit@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h5>+91 9508 413289</h5>
            <a href="https://api.whatsapp.com/send?phone+919508413289">Whatsapp Me</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h5>biswajitnath.iit@gmail.com</h5>
            <a href="mailto:biswajitnath.iit@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder='Your Name' />
          <input type="email" name="email" id="email" placeholder='Your email' />
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
          <button type="submit" value="" className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact