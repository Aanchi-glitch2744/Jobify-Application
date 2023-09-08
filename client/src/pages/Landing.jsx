import styled from "styled-components"
import Wrapper from '../assets/wrappers/LandingPage.js'
import main from '../assets/images/main.svg'
import {Link} from "react-router-dom";
import Logo from "../components/Logo.jsx";

// const StyledBtn = styled.button`
//   font-size: 1.5rem;
//   background: darkred;
//   color: white;
//   border: none;
//   border-radius: 0.25rem;
//   padding: 0.25rem;
// `;

const Landing = () => {
    return (
        // <div>
        //     <h1>Landing Layout</h1>
        //     {/*<StyledBtn>Styled Btn</StyledBtn>*/}
        // </div>
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container-page">
                <div className='info'>
                   <h1>job <span>tracking</span> app</h1>
                    <p>Lorem ipsum bjhxjnx hska xnu xak  asha aiuz aj skau </p>
                    <Link to='/register' className='btn register-link'>Register</Link>
                    <Link to='/login' className='btn'>Login / Demo User</Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    )
}
//imported
// const Wrapper = styled.div`
//   background: darkred;
//   h1{
//     color: white;
//   }
//   .content{
//     background: white;
//     color: #044e54;
//   }
// `

export default Landing;