import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../components/GoogleAuth'

export default function Header() {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Streamer
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  )
}

//984984879958-4mmnd6hgl47dpvvu0opn26i0pqb11gqv.apps.googleusercontent.com
