import React from "react";
import Authetication from "./Components/Auth/AutheticationPage"


const  App:React.FC =() =>{
  // const [isLogin,setIsLogin] = useState<Boolean>(true)
  return (
    <div >
    <Authetication/>
      {/* <button onClick={()=>setIsLogin(!isLogin)}>change</button> */}
    </div>
  )
}

export default App;
