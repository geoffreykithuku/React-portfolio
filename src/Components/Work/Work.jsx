import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Work = () => {
  return (
   <div className="works">
       {/* left side */}
     <div className="awesome">
       <span>Worked for These</span>
       <span>Brands & Clients</span>
       <span>
           Lorem ipsum dolor sit amet consectetur 
         
         <br/>
         nemo dignissimos. Adipisci doloribus sequi magni
         <br/>
         nemo dignissimos. Adipisci doloribus sequi magni
         <br/>
         nemo dignissimos. Adipisci doloribus sequi magni
         
          
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
                 <img src={Amazon} alt="" />
             </div>
             <div className="seccircle">
                 <img src={Facebook} alt="" />
             </div>
             <div className="seccircle">
                 <img src={Shopify} alt="" />
            
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
