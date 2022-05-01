import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FoatingDiv/FloatingDiv'
const Intro = () => {
  return (
    <div className='intro'>
      <div className="i-left">
          <div className="i-name">
              <span>Hi, I Am </span>
              <span>Geoffrey</span>
              <span>Frontend developer with high
                   level of experience in web design
                    and development.</span>
          </div>
          <button className="button i-button">Hire Me</button>
          <div className="i-icons">
              <img src={Github} alt="" />
               <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
          </div>
      </div>
      <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <img src={glassesimoji} alt="" />
            <div style={{top:'-4%', left:'68%'}}>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'17rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </div>
            {/* blur div */}
            <div className="blur" style={{background:'rgb(236 210 255)'}}>
                <div className="blur" style={{background:'#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>

            </div>

      </div>
    </div>
  )
}

export default Intro
