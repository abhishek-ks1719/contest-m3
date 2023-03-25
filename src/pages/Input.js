const Input = ({ pincode,setPincode,handleClick}) => {

  return (
    <div className="inputGroup">
        <div className="label">
        <p>Enter Pincode</p>
        </div>
        <div className="input">
            <input 
            type="number" 
            placeholder='Pincode' 
            value={pincode} 
            onChange={(e)=>setPincode(e.target.value)}/>
        </div>
        <div className="lookUpButton">
            <button onClick={handleClick}>Lookup</button>
        </div>
    </div>
  )
}

export default Input