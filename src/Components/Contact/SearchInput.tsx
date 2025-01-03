import search from "../../assets/search-icon.svg"
const SearchInput = () => {
  const handleOnFocus =(e: React.FocusEvent<HTMLInputElement>)=>{
    e.preventDefault();
e.target.placeholder =""
  }
  const handleOnBluer =(e: React.FocusEvent<HTMLInputElement>)=>{
    e.preventDefault();
e.target.placeholder ="Search"
  }
  return (
    <div className="p-4">
    <div className="flex bg-[#F0F2F5] items-center rounded-full h-[50%] w-[100%]" >
      <img src={search} alt="Search-icon" className="w-14 h-14 mr-3 mt-3 py-2 " />
      <input type="text" placeholder="Search"  className="outline-none bg-transparent w-[100%] text-sm" onFocus={handleOnFocus} onBlur={handleOnBluer}/>
    </div>
    </div>
  )
}

export default SearchInput
