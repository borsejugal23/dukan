import React from 'react'
import "./sidebar.css"
import { ReactComponent as ImgSVG1 } from '../assets/side/home.svg';
import { ReactComponent as ImgSVG2 } from '../assets/side/task.svg';
import { ReactComponent as ImgSVG3 } from '../assets/side/boxes.svg';
import { ReactComponent as ImgSVG4 } from '../assets/side/truck.svg';
import { ReactComponent as ImgSVG5 } from '../assets/side/horn.svg';
import { ReactComponent as ImgSVG6 } from '../assets/side/stair.svg';
import { ReactComponent as ImgSVG7 } from '../assets/side/payouts.svg';
import { ReactComponent as ImgSVG8 } from '../assets/side/percentage.svg';
import { ReactComponent as ImgSVG9 } from '../assets/side/profile.svg';
import { ReactComponent as ImgSVG10 } from '../assets/side/paint.svg';
import { ReactComponent as ImgSVG11 } from '../assets/side/spark.svg';

import { ReactComponent as ImgSVG12 } from '../assets/side/purse.svg';
import { ReactComponent as ImgSVG13 } from '../assets/side/dropDown.svg';
import { ReactComponent as ImgSVG14 } from '../assets/side/Image.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="side_container1">
            <div className="side_top">
               <div className='side_top_left'>
                  <ImgSVG14 className="side_svg_img"/>
                  <div className='side_top_text'>
                    <span className='side_top_text1'>Nishyan</span>
                    <span className='side_top_text2'>Visit Store</span>
                  </div>
               </div>
               <ImgSVG13 className="side_svg"/>
            </div>

            <div className="side_bottom">
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG1 className="side_svg"/>
                    <span className='side_menu_text'>Home</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG2 className="side_svg"/>
                    <span className='side_menu_text'>Orders</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG3 className="side_svg"/>
                    <span className='side_menu_text'>Products</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG4 className="side_svg"/>
                    <span className='side_menu_text'>Delivery</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG5 className="side_svg"/>
                    <span className='side_menu_text'>Marketing</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG6 className="side_svg"/>
                    <span className='side_menu_text'>Analytics</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG7 className="side_svg"/>
                    <span className='side_menu_text'>Payouts</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG8 className="side_svg"/>
                    <span className='side_menu_text'>Discounts</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG9 className="side_svg"/>
                    <span className='side_menu_text'>Audience</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG10 className="side_svg"/>
                    <span className='side_menu_text'>Appearance</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <ImgSVG11 className="side_svg"/>
                    <span className='side_menu_text'>Plugin</span>
                  </div>
                </div>
                
                
                   
            </div>
        </div>
        <div className="side_container2">
           <ImgSVG12 className="side_svg"/>
           <div className="side_container2_bottom">
              <div className="side_container2_bottom_text">Available credits</div>
              <div className="side_container2_bottom_number">222.10</div>
           </div>
        </div>
    </div>
  )
}

export default Sidebar