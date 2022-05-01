import React, { useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

   const form = useRef();
   const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hjkc1ht', 'template_x82u3fw', form.current, 'gAShCxizR1U0Ba5AE')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className= 'blur s-blur1' style={{
                  background:'#ABF1FF94'
                }}></div>
            </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' placeholder='Name' className='user' />
            <input type="email" name='user_email' placeholder='Email' className='user' />
            <textarea name="message" className='user' placeholder='Message'></textarea>
            <input type="submit" name='user_name' value='Send' className='button' />

            <span>{done && "Thanks for contacting me!"}</span>
            <div className= 'blur s-blur1' style={{
                  background:'var(--purple)'
                }}></div>
          </form>
        </div>
    </div>
  )
}

export default Contact
