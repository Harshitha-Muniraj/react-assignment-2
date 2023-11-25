import React from 'react'

const Hero = () => {
    const herostyle={backgroundColor:'#71e0c9',color:'white',height:'90vh',display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  justifyContent:'center'}
  return (

    <>
    <div style={herostyle}>
        <p style={{backgroundColor:'rgb(52, 67, 98)',width: '200px',
    borderRadius: '50%',height:'200px',display:'flex',justifyContent:'center',alignItems:'center'}}><img src="favicon-32x32.png" alt="pic" style={{width:'150px',height:'150px'}} /></p>
        
        <h1>START BOOTSTRAP</h1>
        <h2>Graphic Artist - Web Designer - Illustrator</h2>
    </div>
    </>
  )
}

export default Hero