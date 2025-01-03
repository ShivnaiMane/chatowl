import React from 'react';
import avatar from "../../assets/avatar.png"


interface ContactProps {
  contact: { id: number; name: string; lastText: string; lastTextTime: string }
}

const SingleContact:React.FC<ContactProps> = ({contact}) => {
  return (
    <>
<div className="flex mx-2 items-center gap-5 border-b border-gray-200 p-1 hover:bg-[#F0F2F5] ">
  <img src={avatar} alt="" className="w-9 h-9" />
    <h2 >{contact.name}</h2>
</div>
    </>
  )
}

export default SingleContact
