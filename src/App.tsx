
import ChatWindow from "./Components/ChatUI/ChatWindow";
import ContactList from "./Components/Contact/ContactList";


const  App:React.FC =() =>{
  return (
  <>
  <div className="flex flex-col sm:flex-row h-[100vh]">
    <ContactList/>
    <ChatWindow/>
  </div>
  </>
  )
}

export default App;
