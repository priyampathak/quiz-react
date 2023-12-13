import React from 'react'
import myimg from '../assets/unt.png'
import { Link } from 'react-router-dom'
import { facts } from '../data'
import './lands.css';


export default function Lands() {
  const o = 1;
  const randomValue = Math.floor(Math.random() * (6 - o)) + o;
  return (
    <>
    <div className="main" style={{display:'flex', width:'100%'}}>
        <div className="sec1" style={{width:'60%', marginTop:'5%', marginLeft:'3%'}}>
            <h1 style={{fontSize:'50px'}}>Welcome user!</h1>
            <h2>{facts[randomValue]}
            </h2>
            <button style={{backgroundColor:'#FED94B', border:'none', color:'black', borderRadius:'8px',
                            height:'50px', width:'165px', fontSize:'15px', marginTop:'5%'}}><Link to='main' style={{textDecoration:'none', color:'black'}}>Start Quiz</Link></button>
        </div>
        <div className="sec2" style={{width:'40%', marginLeft:'20%'}}>
            <img src={myimg} style={{height:'40rem', width:'40rem'}}/>
        </div>
    </div>
    </>
  )
}
