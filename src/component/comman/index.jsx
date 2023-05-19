import React from 'react';
import './style.scss';



/**
 * 
 */
const Comman = ({ heading, des, img }) => {
    return (


        <>





            <div className='HeadingSection'>

                <div className='contentSection'>
                    <h1>{heading}</h1>
                    <p>{des}</p>
                </div>

                <div className='contentImg'>
                    <img src={img} alt="" srcset="" />
                </div>
            </div >


        </>


    );
}



export default Comman;