import React from 'react';
import '../../../styles/pages/Home.scss'
import AnimationButton from '../../../component/AnimationButton/AnimationButton';

const Section7 = () => {
    return (

        <>

            <div className='section7'>

                <div className='imgSection'>
                    <img src="https://eat-curious.com/wp-content/uploads/2023/02/home-21.png" alt="" srcset="" />
                </div>

                <div className='contentSection'>

                    <h2>WE'RE GROWING MORE THAN PLANTS...</h2>
                    <p>We’re here to grow a positive, curious and thoughtful attitude to plant-based food. Which is why we put curiosity at the heart of everything we do. So much so, we’ve built our own vertical farm – a near-off-grid, plant playground where we’re researching how to add even more flavour, nutrition and sustainability to the way we all eat.</p>
                  <div className='visitBtn'>
 
                    <AnimationButton heading={"VISIT SYAN FARMS"}/>

                  </div>
                </div>

            </div>

        </>

    );
}



export default Section7;