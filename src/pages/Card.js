import React from 'react'

const Card = ({pincode}) => {
  const c = (pincode.DeliveryStatus==='Delivery');
  return (
    <div className="card">
        <p>Name : {pincode.Name}</p>
        <p>Branch Type : {pincode.BranchType}</p>
        <p >Delivery Status : <span style={{color:(c?'green':'red')}}>{pincode.DeliveryStatus}</span></p>
        <p>District : {pincode.District}</p>
        <p>Division : {pincode.Division}</p>
    </div>
  )
}

export default Card