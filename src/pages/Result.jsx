import React from 'react'
import { useContext, useState } from 'react'
import { callContext } from '../context'
import imgs from '../assets/green.png'
import { Link } from 'react-router-dom'

export default function Result() {
    const [i,o,r,setI,setO,setR]= callContext()
    const [pr, setPr] = useState("Here is your score card!")

    return (
        <div style={{textAlign:'center', marginLeft:'4%'}}>
            <p style={{fontSize:'50px', fontWeight:'bold'}}>Quiz Result</p>
            <img src={imgs} style={{width:'10%', marginTop:'-50px'}}/>
            <p style={{fontSize:'15px', fontWeight:'bold'}}>{pr}</p>
            <div style={{backgroundColor:'#3389C6', width:'40%', marginLeft:'30.5%', height:'70%', textAlign:'center', borderRadius:'8px'}}>
                <h2>YOUR SCORE</h2>
                <p style={{fontSize:"80px", marginTop:'-3%'}}>{r}</p>
                <hr style={{marginTop:'-12%'}}></hr>
                <h2 style={{}}>QUALIFYING SCORE : 50</h2>
                <button style={{
                backgroundColor:'#F6E101',
                color:'black',
                borderRadius:'7px',
                height:'40px',
                width:'150px',
                fontSize:'18px',
                marginBottom:'18px',
                border:'none'
            }}><Link to='/'style={{textDecoration:'none', color:'black'}}>Retry</Link></button> 

            </div>
        </div>
    )
}
