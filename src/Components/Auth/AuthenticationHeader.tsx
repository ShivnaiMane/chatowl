import logo from "../../assets/logo.png"

const AuthenticationHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5 sm:px-8">
      <img src={logo} alt="Logo" className="w-[150px]" />
      <button className="border border-gray-500 px-5 py-3 rounded-full  bg-green-400 hover:bg-black hover:text-white">Download</button>
    </div>
    </>
  )
}

export default AuthenticationHeader
