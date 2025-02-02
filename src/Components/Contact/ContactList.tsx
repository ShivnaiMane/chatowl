import add from "../../assets/add-icon.svg"
import SearchInput from "./SearchInput"
import { contactList } from "../../DummyData"
import SingleContact from "./SingleContact"

interface ContactData {
  id: number
  name: string
  lastText: string
  lastTextTime: string
}

const ContactList = () => {
  return <>
    <div className="flex flex-col flex-1 h-[100%] max-w-[400px] cursor-pointer border-r-2 border-gray-300" >
      <div className="flex justify-between p-3">
        <h1 className="text-3xl font-bold">Chat</h1>
        <img src={add} alt="" className="filter grayscale opacity-50" />
      </div>
      <SearchInput />
      <div className="overflow-y-auto max-w-[500px]">{
        contactList.map((contact: ContactData) => <SingleContact contact={contact} key={contact.id} />)}
      </div>
    </div>
  </>
}
export default ContactList;