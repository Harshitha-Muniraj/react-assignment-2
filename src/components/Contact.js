import React from 'react'

const Contact = () => {
  return (
    <div style={{display:'flex',backgroundColor:'#3c3c5e',color:'white',alignItems: 'center',
    justifyContent: 'space-evenly',height:'30vh',textAlign:"center"}}>
        <div>
            <h2>LOCATION</h2>
            <p><pre>
                2215 John Daniel Drive
                Clark, MO 65243
                </pre>
            </p>
        </div>
        <div>
            <h2>AROUND THE WEB</h2>
        </div>
        <div>
            <h2>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, MIT licensed</p>
        </div>
    </div>
  )
}

export default Contact