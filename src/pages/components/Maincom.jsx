import React from 'react'
import { useContext, useState } from 'react'
import { callContext } from '../../context'
import {qna} from '../../data'
import './Mainc.css'
import Options from './Options'
import imgs from '../../assets/Home.png'
import { Link } from 'react-router-dom'

export default function Maincom() {
    const [i,o,r,setI,setO,setR]= callContext()
    const [bc, setBc] = useState('#251433')
    const [clickCount, setClickCount] = useState(0)
    const [divElement,setDiv] = useState()

    function next(){
        if(i<9){
            setI(i+1)
            setClickCount(0)
            if(divElement){
                divElement.style.backgroundColor = '#251433'
            }
        } else {
            alert("No more Questions available.")
        }
        
    }

    function clicked(e){
        if(clickCount == 0){
            console.log(e.target.textContent)
            if(e.target.textContent == qna[i][o+5]){
                console.log(e.target.textContent)
                
                e.target.style.backgroundColor = '#04AA6D'
                setR(r+10)
            }
            else{
                e.target.style.backgroundColor = '#A90000'
            }
            setClickCount(1)
            setDiv(e.target)
        }
        
    }
    return (
    <>

    {/* questions */}

    <div className="container" style={{position:'relative', textAlign:'center', color:'white',marginTop:'10px'}}>
        <img src={imgs} style={{height:'10%', width:'40%', marginLeft:'110px'}}></img>
        <div className="centered" style={{position:'absolute', top: '50%',left: '53.5%', transform: 'translate(-50%, -50%)', width:'420px', fontSize:'17px'}}>
        <p style={{fontWeight:'bold'}}>{qna[i][o]}</p>
        </div>
    </div>
        
    {/* Options */}

    <div style={{display:'flex', marginLeft:'32%',marginTop:'30px'}}>
        <div className='divs' onClick={clicked}><Options items={qna[i][o+1]} backgroundColor={bc}/></div>
        <div className='divs' onClick={clicked}><Options items={qna[i][o+2]} backgroundColor={bc}/></div>
    </div>
    <div style={{display:'flex' , marginLeft:'32%',marginTop:'0px'}}>
        <div className='divs' onClick={clicked}><Options items={qna[i][o+3]} backgroundColor={bc}/></div>
        <div className='divs' onClick={clicked}><Options items={qna[i][o+4]} backgroundColor={bc}/></div>
    </div>
    
    {/* Buttons */}

    <div style={{display:'flex', paddingLeft:'42.8%', paddingRight:'30%'}}>
    <button style={{
        backgroundColor:'#F6E101',
        color:'black',
        borderRadius:'7px',
        height:'40px',
        width:'150px',
        fontSize:'18px',
        marginBottom:'18px',
        marginTop:'20px',
        border:'none',
        marginRight:'8%'
    }} onClick={next}>Next</button> 
    
    <button style={{
        backgroundColor:'#F6E101',
        color:'black',
        borderRadius:'7px',
        height:'40px',
        width:'150px',
        fontSize:'18px',
        marginBottom:'18px',
        marginTop:'20px',
        border:'none'
    }}><Link to='result'style={{textDecoration:'none', color:'black'}}>Finish</Link></button> 

    </div>


    
    </>
    )
}