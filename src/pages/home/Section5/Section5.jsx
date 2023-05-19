import React from 'react';
 import  '../../../styles/pages/Home.scss'


const CardDetils = [

    {
        img: 'https://eat-curious.com/wp-content/uploads/2022/12/home-9.png',
        heading: 'Plant based',
        des: 'Plant-protein yumminess, suitable for vegans (and everyone else).'
    }
    ,

    {
        img: 'https://eat-curious.com/wp-content/uploads/2022/12/home-11.png',
        heading: 'Plant based',
        des: 'Plant-protein yumminess, suitable for vegans (and everyone else).'
    },

    {
        img: 'https://eat-curious.com/wp-content/uploads/2022/12/home-12.png',
        heading: 'Plant based',
        des: 'Plant-protein yumminess, suitable for vegans (and everyone else).'
    },

    {
        img: 'https://eat-curious.com/wp-content/uploads/2022/12/home-10.png',
        heading: 'Plant based',
        des: 'Plant-protein yumminess, suitable for vegans (and everyone else).'
    },

]


const Section5 = () => {
    return (
        <>

            <div className='section5'>
                <h1>Features &  <br />
                    Benefits</h1>

                <div className='cardSection'>
                    {
                        
                        CardDetils.map((CardDetils) => (
                           
                            <div className='MainCard'>

                            <div className='cardContent'>
                                <img src={CardDetils.img}  alt="" srcset="" />
                                <h2>{CardDetils.heading}</h2>
                                <p>{CardDetils.des}</p>
                            </div>
                
                        </div>
                        ))
                    }

                </div>

            </div>
        </>


    );
}


export default Section5;