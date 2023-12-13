import React from 'react'


export default function Options(p) {
    const backgroundColor = p.backgroundColor || '#251433';
    return (
    <div style={{
        backgroundColor:backgroundColor,
        borderRadius:'7px',
        height:'40px',
        width:'290px',
        paddingTop:'15px',
        paddingLeft:'25px',
        fontSize:'18px',
        marginBottom:'18px',
        marginRight:'45px',
        fontWeight:'bold'
    }}>
        {p.items}
    </div>
    )
}
