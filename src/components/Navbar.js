import React from 'react'

const Navbar = () => {
    const navstyle={height:'10vh',padding:'1rem', display:'flex',justifyContent:'space-between',color:'white',backgroundColor:'#344362',textTransform: 'uppercase'}
  return (
    <nav style={navstyle}>
      <h1>Start Bootstrap</h1>
    <ul style={{display:'flex',listStyle:'none',gap:'20px',alignItems:'center'}}>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </nav>
  )
}

export default Navbar