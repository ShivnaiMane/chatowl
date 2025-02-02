
const Chat = () => {
  return (
    <>
       <div className="flex flex-col py-3 px-5 h-[80%] overflow-y-scroll">
      <div className={`flex my-1.5 mx-4 justify-start `}>
      <p className="max-w-[50%] text-gray-800 px-2.5 py-2 text-base bg-white rounded-lg">
        Hi 
      </p>
    </div><div className="flex my-1.5 mx-4 justify-end">
      <p className="max-w-[50%] text-gray-800 px-2.5 py-2 text-base bg-[#daf8cb] rounded-lg">
        Hello
      </p>
    </div>
    
      </div>
    </>
  )
}

export default Chat
