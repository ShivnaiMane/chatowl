import qrPlacholder from "../../assets/qr-placeholder.png"

const LoginFrom =()=>{
  return <> <div className="flex flex-col gap-4 sm:gap-5 md:flex-row  m-auto bg-white w-[80%] min-h-[450px] items-center sm:justify-evenly px-2 py-3 sm:px-5 rounded-3xl ">
  <div className="p-2">
    <h1 className="text-xl font-semibold sm:text-3xl">Login With Whatsapp Web</h1>
    <p className="text-xs sm:text-base mt-2 ">Message privately with friends and family using WhatsApp on your
    browser.</p>
    <div className="hidden sm:flex flex-col gap-4 ml-3 md:mt-10  ">
        <li>Open WhatsApp on your phone</li>
        <li>Tap Menu on Android, or Settings on iPhone</li>
        <li>Tap Link Devices and then Link a Device</li>
        <li>Point your phone at this screen to scan the QR code</li>
    </div>
    <p></p>
  </div>
  <div className="relative"> 
    <img src={qrPlacholder} alt="" className="w-72 md:w-80 rounded-lg opacity-40" />
    <form onSubmit={(e)=>e.preventDefault()} className="absolute top-0 opacity-90 w-full flex flex-col items-center gap-5 mt-9 ">
      <h1 className="text-center text-xl font-bold ">Login</h1>
      <input type="text" id="Email" placeholder="Enter Your Email" className="text-lg p-1 rounded-lg outline" />
      <button type="submit" className="border border-gray-500 bg-blue-400 p-2 rounded-lg text-white">Send Code</button>
    </form>
  </div>
  </div></>
}
export default LoginFrom