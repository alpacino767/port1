import React from 'react'
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    // superLargeDesktop: {
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Landing = () => {
  return (
  
    <div className="App">

 
    
    <div className='App-1'>
      <nav className='navigation'>

        <div className='navigation'>
          <p className='fib'>Fiber</p>
        </div>


        <div className='navigation-inner nav-scroll'>
          <p className='nav-2'>Community</p>
          <p className='nav-2'>Pricing</p>
          <p className='nav-2'>Features</p>
        </div>



        <div className='navigation-inner nav-reg'>
      <Link to="/signin"><p className='nav-2 nav-reg f1'>Sign in</p></Link>
         <Link to='/signup'><button  className='btn-2'><p className='f2'>Sign Up</p></button></Link> 
        </div>

      </nav>
      <div className='first'>
        <div className='first-ratings'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529" />
          </svg>
          <p className='R1'>Rated 4.8/5 (243 reviews)</p>
        </div>
        <div className="hea">
        <p className='head1'>Create your portfolio<br /> in minutes</p>
        <p className='head2'>With Fiber,you can set up your own personal portfolio in minutes<br /> with dozens of premade, beautiful templates</p>
        </div>
      
        <div className='links'>
          <button className='btn-2 link'><p>Start Free Trial</p></button>
          <p className='view'> View Examples</p>
        </div>
        <div className='check'>
          <div className='mark'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z" fill="#45B19E" />
            </svg>
          
            <p className='card'>No Credit Card Required</p>
            <svg className='sv' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z" fill="#45B19E" />
            </svg>
            <p className='temp'>10 Free Templates</p>
          </div>

        </div>
      </div>
      <div className='container'>
        <img alt='' src='Assets/hero.png' className='hero'></img>
      </div>
    </div>

    <section className='App-2'>
      <p className='fib2'>Why Fiber</p>
      <h2 className='head-3'>A good portfolio means good employability</h2>

      <div className='three'>
        <div className='clock'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6666 20L20.52 13.3333H19.505L18.3333 20C17.34 20.5783 16.6666 21.64 16.6666 22.8717C16.6666 24.7117 18.16 26.205 20 26.205C21.84 26.205 23.3333 24.7117 23.3333 22.8717C23.3333 21.64 22.66 20.5783 21.6666 20ZM20 6.66667C10.7966 6.66667 3.33331 14.1283 3.33331 23.3333C3.33331 32.5383 10.7966 40 20 40C29.2033 40 36.6666 32.5383 36.6666 23.3333C36.6666 14.1283 29.2033 6.66667 20 6.66667ZM20 36.6667C12.6483 36.6667 6.66665 30.685 6.66665 23.3333C6.66665 15.9817 12.6483 10 20 10C27.3516 10 33.3333 15.9817 33.3333 23.3333C33.3333 30.685 27.3516 36.6667 20 36.6667ZM16.6666 3.635V0H23.3333V3.635C20.9366 3.23 19.0133 3.23833 16.6666 3.635ZM31.965 7.345L34.31 5L36.6666 7.35667L34.465 9.55833C33.695 8.75167 32.8583 8.015 31.965 7.345ZM10.8333 23.3333C10.8333 23.7933 10.46 24.1667 9.99998 24.1667C9.53998 24.1667 9.16665 23.7933 9.16665 23.3333C9.16665 22.8733 9.53998 22.5 9.99998 22.5C10.46 22.5 10.8333 22.8733 10.8333 23.3333ZM30.8333 23.3333C30.8333 23.7933 30.46 24.1667 30 24.1667C29.54 24.1667 29.1666 23.7933 29.1666 23.3333C29.1666 22.8733 29.54 22.5 30 22.5C30.46 22.5 30.8333 22.8733 30.8333 23.3333ZM20.8333 33.3333C20.8333 33.7933 20.46 34.1667 20 34.1667C19.54 34.1667 19.1666 33.7933 19.1666 33.3333C19.1666 32.8733 19.54 32.5 20 32.5C20.46 32.5 20.8333 32.8733 20.8333 33.3333ZM14.1666 30C14.1666 30.46 13.7933 30.8333 13.3333 30.8333C12.8733 30.8333 12.5 30.46 12.5 30C12.5 29.54 12.8733 29.1667 13.3333 29.1667C13.7933 29.1667 14.1666 29.54 14.1666 30ZM27.5 30C27.5 30.46 27.1266 30.8333 26.6666 30.8333C26.2066 30.8333 25.8333 30.46 25.8333 30C25.8333 29.54 26.2066 29.1667 26.6666 29.1667C27.1266 29.1667 27.5 29.54 27.5 30ZM14.1666 15C14.1666 15.46 13.7933 15.8333 13.3333 15.8333C12.8733 15.8333 12.5 15.46 12.5 15C12.5 14.54 12.8733 14.1667 13.3333 14.1667C13.7933 14.1667 14.1666 14.54 14.1666 15ZM27.5 15C27.5 15.46 27.1266 15.8333 26.6666 15.8333C26.2066 15.8333 25.8333 15.46 25.8333 15C25.8333 14.54 26.2066 14.1667 26.6666 14.1667C27.1266 14.1667 27.5 14.54 27.5 15Z" fill="#4D13D1" />
          </svg>
          <h2 className="build" >Build in minutes</h2>
          <p className='time'>With a selection of premade templates,<br />you can build out of a portfolio in less than 10mins</p>
        </div>
        <div className='clock-2'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.6667 0H8.33333C3.73167 0 0 3.73167 0 8.33333V31.6667C0 36.2683 3.73167 40 8.33333 40H31.6667C36.27 40 40 36.2683 40 31.6667V8.33333C40 3.73167 36.27 0 31.6667 0ZM18.3333 16.9983L12.2667 20L18.3333 22.9933V26.6667L8.33333 21.775V18.2233L18.3333 13.3333V16.9983ZM31.6667 21.775L21.6667 26.6667V22.9933L27.7333 20L21.6667 16.9983V13.3333L31.6667 18.225V21.775Z" fill="#4D13D1" />
          </svg>
          <h2 className="build">Add custom CSS</h2>
          <p className='cus'>Customise your personal portfolio even<br /> more with the ability to add your own custom CSS styles</p>
        </div>
        <div className='clock-3'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M22.605 40H3.33333C1.49333 40 0 38.5067 0 36.6667V3.33333C0 1.49333 1.49333 0 3.33333 0H26.6667C28.5067 0 30 1.49333 30 3.33333V10H26.6667V5H3.33333V33.3333H21.6667V37.5C21.6667 38.3733 21.97 39.4583 22.605 40ZM37.5 11.6667C38.88 11.6667 40 12.7867 40 14.1667V37.5C40 38.8767 38.8817 40 37.5 40H25.8333C24.4517 40 23.3333 38.875 23.3333 37.5V14.1667C23.3333 12.7883 24.455 11.6667 25.8333 11.6667H37.5ZM15 35C15.92 35 16.6667 35.7467 16.6667 36.6667C16.6667 37.5867 15.92 38.3333 15 38.3333C14.08 38.3333 13.3333 37.5867 13.3333 36.6667C13.3333 35.7467 14.08 35 15 35ZM31.6667 38.3333C30.745 38.3333 30 37.5867 30 36.6667C30 35.7467 30.745 35 31.6667 35C32.5867 35 33.3317 35.7467 33.3317 36.6667C33.3317 37.5867 32.5867 38.3333 31.6667 38.3333ZM38.3333 33.3333V16.6267H25V33.3333H38.3333ZM32.5 15C32.9583 15 33.3333 14.6267 33.3333 14.1667C33.3333 13.7067 32.9583 13.3333 32.5 13.3333H30.8333C30.3733 13.3333 30 13.7067 30 14.1667C30 14.6267 30.3733 15 30.8333 15H32.5Z" fill="#4D13D1" />
          </svg>
          <h2 className="build">Responsive</h2>
          <p className='all'>All Fiber templates are fully responsive to <br />ensure the experience is seemless across all devices </p>
        </div>
      </div>

      <div className='container-1'>
        <div className='c-both'>
          <h2 className='c1'>Diversify your portfolio.</h2>
          <p className='c2'>Create an even more impressive portfolio by creating case studies for your projects.Simply follow our step by step guide.</p>
          <div className='button'> <button className='btn-3'><p className='c3'>Start free Trial</p></button> </div>
        </div>
        <div className='win'>
          <img src='Assets/Page.png' className='pic' alt=''></img>
        </div>
      </div>


      <Carousel 
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
       
      >
    

        
        <div className='container-2'>
          <div className='r-main'>
            <div className='c-head'>
              <img alt='' className='user' src='Assets/User Avatar 32.svg'></img>
              <p className='name'>Janice Dave</p>
              <p className='money rev'>$100k in revenue</p>
            </div>
            <p className='c-body'>I only started freelancing this year and i have already made more than i ever made in my full-time job.The templates are so amazing</p>
            <button className='btn-4'><p>View Janice's Photo</p></button>
          </div>
         


        </div>
        <div className='container-2'>
          <div className='r-main'>
            <div className='c-head'>
              <img alt='' className='user' src='Assets/User Avatar 32.svg'></img>
              <p className='name'>Janice Dave</p>
              <p className='money rev'>$100k in revenue</p>
            </div>
            <p className='c-body'>I only started freelancing this year and i have already made more than i ever made in my full-time job.The templates are so amazing</p>
            <button className='btn-4'><p>View Janice's Photo</p></button>
          </div>
         


        </div>
        <div className='container-2'>
            <div className='r-main'>
              <div className='c-head'>
                <img alt='' className='user' src='Assets/UserAvatar2.svg'></img>
                <p className='name'>Mathew Higgins</p>
                <p className='money rev-1'>$20K in revenue</p>
              </div>
              <p className='c-body'>I have been getting A LOT of leads ever since i used Fibre's premade templates, now i just need to work on my case studies and I'll be ready to go!</p>
              <button className='btn-4'><p>View Mathew's Photo</p></button>
            </div>


          </div>
          <div className='container-2'>
            <div className='r-main'>
              <div className='c-head'>
                <img alt='' className='user' src='Assets/UserAvatar.svg'></img>
                <p className='name'>Sarah Andrews</p>
                <p className='money'>$100K in revenue</p>
              </div>
              <p className='c-body'>Setting up my portfolio with Fiber took no more than 10 minutes.Since then my portfolio  has attracted a lot of clients and made me more than $100k</p>
              <button className='btn-4'><p>View Sarah's Photo</p></button>
            </div>


          </div>
          <div className='container-2'>
            <div className='r-main'>
              <div className='c-head'>
                <img alt='' className='user' src='Assets/UserAvatar.svg'></img>
                <p className='name'>Sarah Andrews</p>
                <p className='money'>$100K in revenue</p>
              </div>
              <p className='c-body'>Setting up my portfolio with Fiber took no more than 10 minutes.Since then my portfolio  has attracted a lot of clients and made me more than $100k</p>
              <button className='btn-4'><p>View Sarah's Photo</p></button>
            </div>


          </div>
          <div className='container-2'>
            <div className='r-main'>
              <div className='c-head'>
                <img alt='' className='user' src='Assets/UserAvatar2.svg'></img>
                <p className='name'>Mathew Higgins</p>
                <p className='money rev-1'>$20K in revenue</p>
              </div>
              <p className='c-body'>I have been getting A LOT of leads ever since i used Fibre's premade templates, now i just need to work on my case studies and I'll be ready to go!</p>
              <button className='btn-4'><p>View Mathew's Photo</p></button>
            </div>


          </div>

     


      </Carousel>
      
  
      <div className='container-3'>
            <div className='r-main'>
              <div className='c-head'>
                <img alt='' className='user' src='Assets/UserAvatar2.svg'></img>
                <p className='name'>Mathew Higgins</p>
                <p className='money rev-1'>$20K in revenue</p>
              </div>
              <p className='c-body'>I have been getting A LOT of leads ever since i used Fibre's premade templates, now i just need to work on my case studies and I'll be ready to go!</p>
              <button className='btn-4'><p>View Mathew's Photo</p></button>
            </div>


          </div>
          <div className='container-3'>
            <div className='r-main'>
              <div className='c-head'>
                <img alt='' className='user' src='Assets/UserAvatar.svg'></img>
                <p className='name'>Sarah Andrews</p>
                <p className='money'>$100K in revenue</p>
              </div>
              <p className='c-body'>Setting up my portfolio with Fiber took no more than 10 minutes.Since then my portfolio  has attracted a lot of clients and made me more than $100k</p>
              <button className='btn-4'><p>View Sarah's Photo</p></button>
            </div>
            


          </div>
          <div className='container-3'>
          <div className='r-main'>
            <div className='c-head'>
              <img alt='' className='user' src='Assets/UserAvatar32.svg'></img>
              <p className='name'>Janice Dave</p>
              <p className='money rev'>$100k in revenue</p>
            </div>
            <p className='c-body'>I only started freelancing this year and i have already made more than i ever made in my full-time job.The templates are so amazing</p>
            <button className='btn-4'><p>View Janice's Photo</p></button>
          </div>
         


        </div>
    </section>



    <footer className='footer'>
      <div className='f-one'>
        <h2 className="big">Fiber</h2>
        <p className='foot premade'>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade beautiful templates</p>
        <p className='foot premade'>made with  <span className='heart'>&hearts;</span> in the Netherlands</p>
      </div>
      <div className='f-two'>
        <h2 className='bighead'>Sitemap</h2>
        <ul className='foot space'>
          <li>Homepage</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Features</li>
        </ul>
      </div>
      <div className='f-three'>
        <h2 className='bighead'>Resources</h2>
        <ul className='foot space'>
          <li>Support</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className='f-four'>
        <h2 className='bighead'>Company</h2>
        <ul className='foot space'>
          <li>About</li>
          <li>Customers</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='f-five'>
        <h2 className='bighead'>Portfolios</h2>
        <ul className='foot space'>
          <li>Sarah Andrews</li>
          <li>Mathew Higgins</li>
          <li>Janice Dave</li>
        </ul>
      </div>

    </footer>



  </div>
 )
}

export default Landing