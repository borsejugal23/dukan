import React from 'react'
import "./mainbox.css"
import { ReactComponent as ImgSVG1 } from '../assets/side/arrow.svg';
import { ReactComponent as ImgSVG2 } from '../assets/help.svg';
import { ReactComponent as ImgSVG3 } from '../assets/search.svg';
import { ReactComponent as ImgSVG4 } from '../assets/side/download.svg';
import { ReactComponent as ImgSVG5 } from '../assets/side/Vector.svg';
import Table from '../table/Table';

const MainBox = () => {

   const tableInsert = () => {
      const tableArray = [];
      for (let i = 0; i < 7; i++) {
        tableArray.push(<Table key={i} />);
      }
      return tableArray;
    };
  return (
    <div className="mainbox">
        <div className="container">
         
          <div className="top">

            <div className="mainbox_top">
               <span className='mainbox_top_text'>Overview</span>
               <div className="mainbox_top_button">
                 <span>This Month</span>
                 <ImgSVG1 className='mainbox_top_drop_icon' />
               </div>
            </div>
            {/*  */}
            <div className="payouts">
                 <div className="payouts_container">
                    <div className="next_payout">
                       <span>Next Payout</span>
                       <ImgSVG2 />
                    </div>
                    <span className='payouts_price'>₹92,312.20</span>
                    <span className='payouts_text'>Next payout date Today, 04:00PM</span>
                    
                 </div>

                 <div className="payouts_container">
                    <div className="next_payout">
                       <span>Next Payout</span>
                       <ImgSVG2 />
                    </div>
                    <span className='payouts_price'>₹92,312.20</span>
                    <span className='payouts_text'>Next payout date Today, 04:00PM</span>
                    
                 </div>

                 <div className="payouts_container">
                    <div className="next_payout">
                       <span>Next Payout</span>
                       <ImgSVG2 />
                    </div>
                    <span className='payouts_price'>₹92,312.20</span>
                    <span className='payouts_text'>Next payout date Today, 04:00PM</span>
                    
                 </div>
            </div>
          </div>

            
            <span className='transactions'>Transactions | This Month</span>
          

            <div className="clickButton">
                <button className="btn_payouts">Payouts (22)</button>
                <button className="btn_refunds">Refunds (6)</button>
            </div>
           
          
        <div className="table">
            <div className="table_fun">
                <div className="table_search">
                    <ImgSVG3 className='search_logo'/>
                    <input
                      type="text"
                      placeholder="Order ID or transaction ID"
                      />
                </div>
                <div className="table_sort">
                   <button className="sort">
                    Sort <ImgSVG5/>
                    </button>
                   <ImgSVG4/>

                </div>
            </div>
              
              <br />
            <table>
                    <tr>
                        <td>Order ID</td>
                        <td>Status</td>
                        <td>Transaction ID</td>
                        <td>Refund date </td>
                        <td>Order amount</td>
                    </tr>
                    {tableInsert()}
                </table> 

        </div>
            

         
        </div>
    </div>
  )
}

export default MainBox