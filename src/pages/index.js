import React from 'react';
import Navbar from '../components/Navbar';
import FirstHomePage from '../components/FirstHomePage/Home';
import About from '../components/AboutPage/About';
import Services from '../components/ServicesPage/Services';

function Home() {
    return (
        <div>
            <>          
            <Navbar />
            <FirstHomePage />
            <About />
            <Services />
            
            
            
            </>
        </div>
    )
}

export default Home
