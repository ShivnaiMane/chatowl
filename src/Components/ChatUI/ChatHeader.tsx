import avatar from "../../assets/avatar.png"

const ChatHeader = () => {
  return (
    <>
      <div className="flex items-center bg-[#F0F2F5] h-16">
        <img src={avatar} alt="Avatar" className="w-9 h-9 m-3"  />
        <p className="text-">Shivani Mane</p>
      </div>
    </>
  )
}

export default ChatHeader
