import Input from "./pages/Input";
import Display  from "./pages/Display";
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";
function App() {
  const [pincode,setPincode] = useState("");
  const [search,setSearch] = useState(false);
  const [data, setData] = useState();
  const searchData = async() =>{
    if(pincode.length<=5){
      alert("Enter Valid Pincode i.e. 6 digit pincode");
      return;
    }
    setSearch(true);
    const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    const json = await response.json();
    console.log("hello",json);
    setData([json])
  }
  return (
    <div className="App">
     {(!data && !search)
     ?<Input pincode={pincode} setPincode={setPincode} handleClick={searchData}/>
     :(!data && search)?<CircularProgress />:<Display pincode={pincode} data={data}/>}
    </div>
  );
}

export default App;
