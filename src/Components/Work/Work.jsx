import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import EBC from '../../img/ebc.png';
import JIM from '../../img/jim.png';
import WSG from '../../img/workspace.png';

const Work = () => {
  return (
   <div className="works" id='Works'>
       {/* left side */}
     <div className="awesome">
       <span>Worked for These</span>
       <span>Brands & Clients</span>
       <span>
           Upwork (Freelancer)
         
         <br/>
         Fiverr (Freelancer)
         <br/>
         Experts Business College
         <br/>
                  Jimtech IT Solutions
                  <br/>
                      Workspace Global
         
          
         </span>
        
           <button className="button s-button">Hire Me</button>
        

         <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
     </div>

     {/* right side */}
     <div className="w-right">
         <div className="w-maincircle">
             <div className="seccircle">
                 <img src={Upwork} alt="" />
             </div>
             <div className="seccircle">
                 <img src={Fiverr} alt="" />
             </div>
             <div className="seccircle">
                 <img src={EBC} alt="" />
             </div>
             <div className="seccircle">
                 <img src={JIM} alt="" />
             </div>
             <div className="seccircle">
                 <img src={WSG} alt="" />
            
             </div>
             </div>
         <div className="w-backcircle bluecircle">

         </div>
         <div className="w-backcircle yellowcircle">

         </div>
     </div>
   </div>
  )
}

export default Work
