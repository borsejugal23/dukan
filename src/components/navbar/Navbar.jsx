import React from 'react'
import "./navbar.css"
import { ReactComponent as ImgSVG1 } from '../assets/msg.svg';
import { ReactComponent as ImgSVG2 } from '../assets/help.svg';
import { ReactComponent as ImgSVG3 } from '../assets/polygon.svg';
import { ReactComponent as ImgSVG4 } from '../assets/search.svg';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="container_box1">
               <span className='payouts'>Payouts</span>
               <div className="icone_help_box">
                  <ImgSVG2 className='icone_help'/>
                  <span className='icone_help_text'>How it works</span>
               </div>
            </div>
            <div className="container_box2">
               <div className="search">
                  <ImgSVG4 className='icone_search'/>
                  <input type="text" placeholder="Search features, tutorials, etc"/>
               </div>
            </div>
            <div className="container_box3">
               <div className="svg">
                  <div className="svg_box"><ImgSVG1 className='svg1'/></div>
                  <div className="svg_box"><ImgSVG3 className='svg2'/></div>
               </div>
            </div> 
        </div>
    </div>
  )
}

export default Navbar