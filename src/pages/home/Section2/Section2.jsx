import React from 'react';
import '../../../styles/pages/Home.scss'
import HeroSection from '../../../component/heroSection/HeroSection';

 



const Section2 = () => {
    return (

        <>
            <div className='main_section'>

                <HeroSection heading={'Inspiring good through tasty goodness'} des={'We’re here to inspire discovery and tempt everyone to eat more plants.  Because we care about the future – yours, ours and the planet’s.'} img={'https://eat-curious.com/wp-content/uploads/2022/12/home-5.svg'} />

            </div>


        </>

    );
}


export default Section2;