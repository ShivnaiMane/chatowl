import React, { useState } from "react";
import Authetication from "./Components/Auth/AutheticationPage"
import ContactList from "./Components/Contact/ContactList";


const  App:React.FC =() =>{
  const [isLogin,setIsLogin] = useState<Boolean>(false)
  if(isLogin){
    return <Authetication/>
  }

  return (
<>
  <div className="flex h-[100vh]">
    <ContactList/>
    <div className="flex flex-2"></div>
  </div>
  <button onClick={()=>{setIsLogin(!isLogin)}}>Change</button>
  </>
  )
}

export default App;
