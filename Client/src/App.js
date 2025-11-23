
import { useState ,useEffect} from "react";
function App() {

const[data,setData]=useState([]);
const [name ,setname]=useState("");



function handleChange(event)
{
  const data = event.target.value;
  setname(data);

}

function handleClick()
{
 
    fetch("http://localhost:5000/api",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({ name })
    }).then(response=> response.json()).then((result)=>{
      setData(result.data);
      setname("");
    })
  
}

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


      <input onChange={handleChange}></input>
      <button onClick={handleClick}>ADD</button>
     {

      

      data.length ===0 ?
     <p>Loading</p> :
      data.map((names,i)=>
      {
       
        return <p key={i}>{names}</p>
      })
     }
    </div>
  );
}

export default App;
