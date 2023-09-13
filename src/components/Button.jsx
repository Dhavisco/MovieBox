import play from '../assets/Play.svg'
const SignInButton = () => {
  return (
    <div className="text-white cursor-pointer" onClick={()=>{alert("clicked")}}>
      Sign Up
    </div>
  )
}

const EventButton = () => {
  return (
    <div className="text-white text-center flex bg-red-800 p-2 w-2/4 rounded-lg cursor-pointer" onClick={()=>{alert("clicked")}}>
     <img src={play} alt="play"/> <span className='pl-1.5 font-medium'>WATCH TRAILER</span>
    </div>
  )
}


 export {SignInButton, EventButton}
