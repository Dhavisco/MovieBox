import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
const Footer = () => {

    
  return (
    <div className="grid grid-rows-3 font-sans pb-8">
      <div className="socials text-[#111827s] justify-center flex">
  <span className="mr-12"><img src={facebook} alt="" /></span>
  <span className="mr-12"><img src={instagram} alt="" /></span>
  <span className="mr-12"><img src={twitter} alt="" /></span>
  <span className=''><img src={youtube} alt="" /></span>
</div>


      <div className="flex pt-4 text-lg font-[700] text-[#111827] justify-center links">
        <span className='mr-12'>Conditions of Use</span>
        <span className='mr-12'>Privacy & Policy</span>
        <span className='mr-12'>Press Room</span>
      </div>
      <div className="footer-text text-lg font-[700] text-[#6B7280] pt-6 flex justify-center">
        <div className=''>© 2021 MovieBox by Adriana Eka Prayudha</div>
      </div>
      
    </div>
  )
}

export default Footer
