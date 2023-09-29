import logo from '../assets/Logo.svg'
import home from '../assets/Home.svg'
import moviesprojector from '../assets/Movie Projector.svg'
import tv from '../assets/TV Show.svg'
import logout from '../assets/Logout.svg'

const Nav = () => {
  return (
    <>
      <div className="flex col-span-1 nav pr-[100px] w-full flex-col pl-6 pt-12 h-screen item-center">

        <div className="flex moviebox-log items-center">
          <a href='/' className="cursor-pointer flex items-center"><img src={logo} alt="logo" />
            <div className="logo-title pl-3 font-bold text-black text-[24px] cursor-pointer">MovieBox</div></a>
        </div>
        <div className='pt-6 links'>
          <div className="Home-link pt-6">
            <div className="flex">
              <div className="cursor-pointer"><img src={home} alt="logo" /></div>
              <div className="logo-title pl-3 font-semibold text-[#666666] text-[20px]">Home</div>
            </div>
          </div>
          <div className="Movies-link bg-[#BE123C1A] pt-4 pb-4 pl-12 ml-[-48px] mt-5">
            <div className="flex">
              <div className="cursor-pointer"><img src={moviesprojector} alt="logo" /></div>
              <div className="logo-title pl-3 font-semibold text-[#666666] text-[20px] ">Movies</div>

            </div>
          </div>
          <div className="tvseries-link pt-6">
            <div className="flex">
              <div className="cursor-pointer"><img src={tv} alt="tv" /></div>
              <div className="logo-title pl-3 font-semibold text-[#666666] text-[20px]">Tv Series</div>
            </div>
          </div>
          <div className="upcoming-link pt-6">
            <div className="flex">
              <div className="cursor-pointer"><img src={tv} alt="tv" /></div>
              <div className="logo-title pl-3 font-semibold text-[#666666] text-[20px]">Upcoming</div>
            </div>
          </div>
        </div>
        <div className='movie-quizes rounded-2xl mt-6 pb-2 pt-8 pl-2.5 pr-2.5 ml-[-9px] bg-[#F8E7EB66] border-[1px] border-[#BE123CB2]'>
          <p className=' font-bold text-[16px] text-[#333333CC]'>Play movie quizes and earn free tickets</p>
          <p className='text-[12px] font-[450] text-[#666666]'>50K People are playing now</p>
          <div className='start-playing text-[14px] font-bold mt-2 ml-2.5 mb-2 pt-1.5 pb-1.5 pr-2 pl-2 w-[80%] items-center bg-[#BE123C33] text-[#BE123C] rounded-3xl text-center border-red-500'>Start playing</div>
        </div>
        <div className='Log-out pt-6 pb-12'>
          <div className="flex">
            <div className=""><img src={logout} alt="logout" /></div>
            <div className="logo-title pl-3 font-semibold text-[#666666] text-[20px]">Logout</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
