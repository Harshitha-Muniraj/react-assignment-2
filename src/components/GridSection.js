import React from 'react'

const GridSection = () => {
    const itemsec=[{id:1,image:'menu2.jpg',circleColor:'#397e94',backgroundColour:'#ed657d'},
    {id:2,image:'menu4 - Copy.png',circleColor:'red',backgroundColour:'#50b6dc'},
    {id:3,image:'menu5.jpeg',circleColor:'white',backgroundColour:'black'},
    {id:4,image:'menu7.jpeg',circleColor:'orange',backgroundColour:'#7e7ebe'},
    {id:5,image:'menu8.jpeg',circleColor:'yellow',backgroundColour:'blue'},
    {id:6,image:'menu10.jpeg',circleColor:'grey',backgroundColour:'#d0d077'}]
   
    
  return (
    <>
    
      <h1 style={{textAlign:'center'}}>Portfolio</h1>
      <div className='grid'>
      {
        itemsec.map((item)=>
            <>
             
             {
            <div style={{backgroundColor:`${item.backgroundColour}`,width:'400px',height:'300px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{backgroundColor:`${item.circleColor}`,width:'250px',height:'250px',display:'flex',alignItems:'center',borderRadius:'50%',justifyContent:'center'}}>
            <img src={item.image} alt="pic" style={{width:'150px',height:'150px',borderRadius:'50%'}} />
            </div>
            </div>
              
             }
            
            </>
        )
      }  
      </div>
      
    </>
  )
}

export default GridSection