import React from 'react'
import '../css/Header.css'

const header = () => {
  return (
    <div>
        <div className="main-header">
            <h1 id="heading" >STYLES
                <br /> CONFERENCES</h1>
                <h3 id='h3'>August 24–26th — Chicago, IL</h3>
                <nav id="sub-topics" >
                    <a href="#" target="_self" className='navbar'>HOME</a>
                    <a href="#" target="_self" className='navbar'>SPEAKER</a>
                    <a href="#" target="_self" className='navbar'>SCHEDULE</a>
                    <a href="#" target="_self" className='navbar'>VENUE</a>
                    <a href="#" target="_self" className='navbar'>REGISTER</a>

                </nav>
          <div id="sub-header" >
          <p id="head1" className="head" >Dedicated to the Craft of Building Websites</p>
          <p id="head2" className="head" >Every year the brightest web designers and front-end developers descend on</p>
          <p id="head3" className="head" >Chicago to discuss the latest tech logies. Join us this August!</p>
         
          <button id="register">Register Now</button>
          </div>
              
        </div>
    </div>
  )
}

export default header