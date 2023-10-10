import '../App.css'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
const Footer = () => {

    
  return (
    <div className="grid grid-col-3 gap-6 font-sans pb-8">

              <div className="socials flex flex-row gap-8 content-center items-center justify-center text-[#111827s]">
  <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">
    <img src={facebook} alt="" className="social-icon" />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <img src={instagram} alt="" className="social-icon" />
  </a>
  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
    <img src={twitter} alt="" className="social-icon" />
  </a>
  <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer">
    <img src={youtube} alt="" className="social-icon" />
  </a>
</div>

       <div className="flex flex-col lg:flex-row lg:gap-5 gap-3 items-center lg:text-lg font-[650] text-[#050607] justify-center links">
            <div className='link-item'>Conditions of Use</div>
            <div className='link-item'>Privacy & Policy</div>
            <div className='link-item'>Press Room</div>
        </div>

        <div className="footer-text text-sm lg:text-lg font-[700] text-[#6B7280] flex justify-center">
          © 2021 MovieBox by Adriana Eka Prayudha
          </div>

      </div>
      
    
  )
}

export default Footer
