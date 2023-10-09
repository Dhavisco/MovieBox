import play from '../assets/Play.svg'
const SignInButton = () => {
  return (
    <div className="text-white cursor-pointer  hidden md:block" onClick={()=>{alert("clicked")}}>
      Sign Up
    </div>
  )
}

const EventButton = () => {
  return (
    <div className="text-white text-center flex bg-[#BE123C] pl-2 pr-2 p-2 w-2/4 rounded-lg cursor-pointer" onClick={()=>{alert("clicked")}}>
     <img src={play} alt="play"/> <span className=' font-medium'>WATCH TRAILER</span>
    </div>
  )
}

const SeeMoreButton = () => {
  return (
    <div className="flex items-center cursor-pointer" >
           <div className="text-[#BE123C] text-lg" onClick={()=>{alert("clicked")}}>see more  &gt;</div>
            </div>     
)
}
 export {SignInButton, EventButton, SeeMoreButton}
