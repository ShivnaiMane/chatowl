import send_icon from "../../assets/send-icon.svg"

const ChatInput = () => {
  return (
    <>
    <div className="flex items-center gap-3 bg-[#F0F2F5] h-20 py-6 px-4 ">
        <input type="text" placeholder="Messages" className="text-lg p-2 w-full rounded-xl outline-none border-none"/>
        <img src={send_icon} alt="Send-icon" className="filter grayscale opacity-60" />
      </div>
      
    </>
  )
}

export default ChatInput
