import React from 'react';
import './About.css';

function About() {
    return (
        <div className='main-about-div'>
            <div className='container'>
                <div className='row'id='row-about-div'>      
                    <div className='col-md-6'id='about-content-part'>
                        <h2>Unlimited Transaction with zero fees</h2>
                        <p>Get access to our exclusive app that allows you 
                           to send unlimited transation without getting charged any fees
                        </p>
                        <button type='button'className='btn btn-primary buttom'>Learn More</button>
                    </div>
                    <div className='col-md-6'id='about-img-col'>
                        <img className='about-img'src='3.svg' />         
                     </div> 
                   
                </div>
            </div>
            
        </div>
    )
}

export default About
