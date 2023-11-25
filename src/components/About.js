import React from 'react'

const About = () => {
    const content=[{id:1,description:'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.'},
{id:2,description:'You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!'}]
  return (
    <div style={{backgroundColor:'rgb(62 187 156)',height:'50vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <h1 style={{textAlign:'center'}}>About</h1>
         
        <div style={{display:'grid',gridTemplateColumns:'repaeat(2,1fr)',
    gap:" 20px",
    padding: '2% 25% 5%',color:'white'}}>
        {
            content.map((item)=>
            <>{
                
                    <p>{item.description}</p>
                
            }
            </>)
        }
        </div>
        <p className='btn'>Free Download</p>
            
        
    </div>
  )
}

export default About