import React from 'react';
import './user.styles.css';
import '../../universal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
export default function User() {
  return (
    <div className="container1">
      <div className="marginS">
        <div className="flexrow mt2 ml2">
          <img
            className="avatar"
            src="https://i.guim.co.uk/img/media/dd703cd39013271a45bc199fae6aa1ddad72faaf/0_0_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=178a9434c272d5a067353f57a30f58ed"
          ></img>
          <div className="flexcol AL-B">
            <h3 style={{ fontSize: '2rem', color: '#333' }}>Hi Mike,</h3>
            <p style={{ fontSize: '0.9rem', color: '#333', fontWeight: '500' }}>
              welcome Back.
            </p>
          </div>
        </div>
        <div className="flexcol ">

          
          <div className="mrl3"> 
          <div>
            <p
              style={{
                fontSize: '1.3rem',
                fontWeight: '500',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              Today
            </p>
            <b className="labelbg" style={{ fontSize: '1.8rem' }}>
              $19,450
            </b>
            <p className="labelsm mrb1">Account Balance</p>

            </div>

            <div className="mob-col">
              <div className="mobmar">
                <b className="labelbg">$4,000</b>
                <p className="labelsm mrb1">Year-To-Date</p>
              </div>
              
              <div>
                <b className="labelbg">$1,892</b>
                <p className="labelsm mrb1">Total Interest</p>
              </div>
              
            </div>

            <div className="primaryButton">
              <p>I want to</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                color={'#FFFFFF'}
                style={{ fontSize: '1rem' }}
              />
            </div>
            

            <div style={{marginTop:"2rem"}}>
                    <p className="labelbg" style={{fontSize:"1.2rem"}}>Recent Transactions</p>
                    <div style={{borderBottom:'1.5px solid rgb(161, 157, 157 ,.5)' , marginBottom:"2rem"
                }}>
                        <p className="labelsm" style={{padding:"0"}}>2020-08-07</p>
                        <p className="labelme">Withdrawal  Transfer to Bank-XXX11</p>
                    </div >

                    <div style={{borderBottom:'1.5px solid rgb(161, 157, 157 ,.5)',marginBottom:"2rem"}}>
                        <p className="labelsm" style={{padding:"0"}}>2020-08-07</p>
                        <p className="labelme">Withdrawal  Transfer to Bank-XXX11</p>
                    </div >

                    <div style={{borderBottom:'1.5px solid rgb(161, 157, 157 ,.5)'}}>
                        <p className="labelsm" style={{padding:"0"}}>2020-08-07</p>
                        <p className="labelme">Withdrawal  Transfer to Bank-XXX11</p>
                    </div >
                </div>


          </div>
        </div>
        

       
                
           
       
        


             
        
      </div>
    </div>
  );
}
