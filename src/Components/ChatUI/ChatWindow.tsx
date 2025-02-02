import Chat from "./Chat"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"

const ChatWindow = () => {

  return (
    <div className={`hidden sm:flex sm:flex-col flex-1 bg-[url("https://static.whatsapp.net/rsrc.php/v4/yl/r/gi_DckOUM5a.png")] bg-[#f0f0f0] bg-center`}>
      <ChatHeader/>
      <Chat/>
      <ChatInput/>
    </div>
  )
}
export default ChatWindow
