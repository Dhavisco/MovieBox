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
    <div className="text-white text-center flex bg-[#BE123C] w-[60%] px-2 p-2 rounded-lg cursor-pointer items-center content-center justify-center">
  <img src={play} alt="play" />
  <span className='pl-1 font-medium'>WATCH TRAILER</span>
</div>

  )
}

const SeeMoreButton = () => {
  return (
    <div className="flex items-center cursor-pointer" >
           <div className="text-[#BE123C] text-lg">see more  &gt;</div>
            </div>     
)
}
 export {SignInButton, EventButton, SeeMoreButton}
