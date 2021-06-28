import React from 'react'
import './Home.css';

const FirstHomePage = () => {
    return (
        <div className='main-div'>
            <div className='container'>
                <div className='row'id='row-div'>
                    <div className='col-md-6'id='content-part'>
                      <h2>Launch beautigul websites directly from SrCorporation</h2>
                      <p> Sign up for a new account today and receive
                        $250 in credit towards your next pyment. 
                        </p>
                        <button type='button'className='btn btn-primary buttom'>Learn More</button>
                    </div>
                    <div className='col-md-6'id='col-image'>
                        <img className='Home-img'src='1.svg'alt='Home' />                     
                    </div>
                </div>
                
               
            </div>       
        </div>
    )
}

export default FirstHomePage
