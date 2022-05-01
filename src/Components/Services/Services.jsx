import React from 'react'
import './Services.css';
import Humble from '../../img/humble.png';
import Card from '../Card/Card.jsx';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Profile from './Profile.pdf';

const Services = () => {
  return (
   <div className="services">

     {/* left side */}
     <div className="awesome">
       <span>My Awesome</span>
       <span>Services</span>
       <span>Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. 
         sint, 
         <br/>
         nemo dignissimos. Adipisci doloribus sequi magni
          
         </span>
         <a href={Profile} download>
           <button className="button s-button">Download CV</button>
         </a>

         <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
     </div>
     {/* right side */}
     <div className="cards">

       {/* first card */}
       <div style={{
         left:'14rem'
       }}>
         <Card
         emoji = {HeartEmoji}
         heading = {'Design'}
         detail = {'Figma, Sketch, photoshop, Adobe XD'}
         
         />
       </div>

       {/* second card */}
       <div style={{top:'12rem', left:'-4rem'}}>
          <Card
         emoji = {Glasses}
         heading = {'Developer'}
         detail = {'HTML, CSS, JavaScript, React, Bootstrap, PHP'}
         
         />
       </div>

       {/* third card */}
        <div style={{top:'19rem', left:'20rem'}}>
          <Card
         emoji = {Humble}
         heading = {'UI/UX'}
         detail = {'lorem loreml oremlorem loremloremlor emloremloreml oremlor emlorem'}
         
         />
       </div>
       <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
     </div>
   </div>
  )
}

export default Services
