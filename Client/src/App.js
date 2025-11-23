
import { useState ,useEffect} from "react";
function App() {

const[data,setData]=useState([]);

useEffect(()=>
{
  const interval = setInterval(()=>{
  fetch("http://localhost:5000/api").then(response =>response.json()).then(
user=>
    setData(user)
  )},2000
)

return  ()=> clearInterval(interval)
},[]);

  return (
    <div>
     {

      data.length ===0 ?
     <p>Loading</p> :
      data.map((names)=>
      {
       
        return <p>{names}</p>
      })
     }
    </div>
  );
}

export default App;
