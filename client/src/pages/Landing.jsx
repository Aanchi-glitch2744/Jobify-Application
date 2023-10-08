import styled from "styled-components"
import Wrapper from '../assets/wrappers/LandingPage.js'
import main from '../assets/images/img.svg'
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
            <div className='header'>
                <nav>
                    <Logo />
                </nav>
                <span>
                    <img src={main} alt='job hunt' height='10%' width='10%' />
                </span>
            </div>
            <div className="container-page" >
                <div className='info'>
                   <h1>job <span>tracking</span> app</h1>
                    {/*<p>Lorem ipsum bjhxjnx hska xnu xak  asha aiuz aj skau </p>*/}
                    <p>
                        <h2>Welcome to Jobify - Your Ultimate Job Tracking Companion!</h2>

                        Are you tired of the hassle of managing your job applications, interviews, and offers? Look no further! Jobify is here to simplify your job search process and help you stay organized every step of the way. Our user-friendly web app portal is designed to streamline your job tracking experience and ensure you never miss out on a great opportunity. Explore the key features of Jobify below:

                        <div>
                            <div className='features'>
                        <h3>Dashboard Overview:</h3>
                        Upon logging in, you'll be greeted by your personalized dashboard. It provides an at-a-glance summary of your job search progress, including the number of jobs added, job statuses, and insightful charts to help you analyze your data. Stay informed and motivated as you track your journey to landing your dream job.
                            </div>
                            <div className='features'>
                        <h3>Add, Edit, and Delete Jobs:</h3>
                        Easily add new job listings to your profile. Input essential details such as the job title, company, application date, and application status. Editing and deleting jobs is a breeze, allowing you to keep your job listings up to date effortlessly.
                            </div>
                            <div className='features'>
                        <h3>Search for Jobs:</h3>
                        Quickly find the job you're looking for with our intuitive search feature. Filter jobs by title, company, or status to locate the information you need at a moment's notice.
                            </div>
                            <div className='features'>
                        <h3>Status Page with Data Charts:</h3>
                        Our Status Page is your go-to destination for analyzing your job search progress. Visualize your application success rates, interview invitation trends, and offer acceptance rates with easy-to-read charts. These insights empower you to make informed decisions about your job hunt.
                            </div>
                            <div className='features'>
                        <h3>Profile Page Section:</h3>
                        Your profile page is your personal space to manage your account settings and preferences. Update your profile information, set notification preferences, and customize your Jobify experience to suit your needs.
                            </div>
                            <div className='features'>
                        <h3>Security and Privacy:</h3>
                        Rest assured, Jobify takes your data security seriously. We use state-of-the-art encryption to keep your information safe and confidential.
                            </div>
                        </div>
                        <h3>Get Started with Jobify Today!</h3>
                        Don't let the chaos of job hunting overwhelm you. Sign up for Jobify now and take control of your job search. It's time to simplify, organize, and succeed! Join Jobify and make your job search journey smoother than ever.

                        Ready to Get Started? Sign Up Now!
                    </p>
                    <Link to='/register' className='btn register-link'>Register</Link>
                    <Link to='/login' className='btn'>Login / Demo User</Link>
                </div>
                {/*<img src={main} alt='job hunt' className='img main-img' />*/}
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