import '../../styles/layout/header.scss'
import AnimationButton from '../AnimationButton/AnimationButton';

const Header = () => {
    return <>

        <div className="Main_header">
            <div className="header_list">

                <li>ABOUT</li>
                <li>PRODUCTS</li>
                <li> <h3>Eat<br></br><span>Curious</span></h3></li>
                <li>RECIPES</li>

                <div className='btn'>
                    <AnimationButton heading={"CONTACT US"}/>
                </div>
            </div>

        </div>

    </>
}


export default Header;