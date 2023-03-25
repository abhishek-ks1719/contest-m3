import React, { useState } from 'react'
import Card from './Card'


const Display = ({pincode,data}) => {
  const [required,setRequired] = useState('');
  return (
    (data[0][0].Status==='Error')

        ?<div><p>"Couldn't find the postal data you're looking for…"</p></div>

        :<div className="display">
        <h2>Pincode: {pincode}</h2>
        <h3>Message: {data[0][0].Message}</h3>
        <input type="text" placeholder="Filter" value={required} onChange={(e)=>setRequired(e.target.value)}/>
        <div className="cards">
        {data[0][0].PostOffice
          .filter((item)=>{
          if(required === '')
          return item;
          else if (item.Name.toLocaleLowerCase().includes(required.toLocaleLowerCase()))
          return item;
        }).map((item,index)=>(<Card pincode={item} key={index}/>))}
        </div>
    </div>
  )
}

export default Display