import React from 'react'
import {Link} from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className='full-page'>
        <div className="">
            <img src={img} alt="not found image" />
            <h3>Ohh..Page Not Found</h3>
            <p>We are Not Able to Find a Page That you'ae  looking for</p>
            <Link to='/' className=''>Back to Home</Link>
        </div>
    </Wrapper>
  )
}

export default Error