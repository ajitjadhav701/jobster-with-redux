import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg' 
import styled from 'styled-components'   



const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <img className='logo' src={logo} alt="jobster logo" />
        </nav>
        <div className="container page">
            {/*info */}
            <div className="info">
                <h1>job <span>tracking</span>app</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid labore libero at, dolorum nulla minus beatae ipsam sequi expedita porro eligendi quae deserunt aspernatur autem ut saepe in ullam? Iure.</p>
                <button className="btn btn-hero">Login/Reister</button>
             </div>
            <img src={main} alt="main image" className='img main-img' />
        </div>
    </Wrapper>
  )
};
const Wrapper=styled.main`
   nav{
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
   }
   .page{
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
   }
   h1{
    font-weight: 700;
        span{
            color: var(--primary-500);
        }
   }
    p{
        color: var(--grey-600);
    }
    .main-img{
        display: none;
    }
    @media (min-width: 992px){
        .page{
            grid-template-columns: 1f 1f;
            column-gap:3rem ;
        }
        .main-img{
        display: block;
    }
    }
`

export default Landing
