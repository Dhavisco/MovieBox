import { EventButton } from "./Button"
import imdb from '../assets/imdb.svg'
import tomato from '../assets/tomato.svg'
import rectangle from '../assets/Rectangle 1.svg'



const Herotext = () => {
  return (
    <>
    <div className="grid lg:grid-cols-2 column w-[100%] h-[90vh] font-sans content-center md:pr-20">
      <div className="text-white flex ml-[8vw] flex-col w-[72%] md:w-[50%]">
        <h1 className="text-5xl font-semibold pb-5">John Wick 3 : Parabellum</h1>

        <div className="hero-rating w-85 flex">
      <span className="flex imdb pr-4">
                  <img src={imdb} alt="imdb" />
                <span className="logo-title font-semibold text-white pl-2">86.0 / 100</span>
            </span>
      <span className="flex rotten-tomatoes">
                  <img src={tomato} alt="rottetomato" />
                <span className="logo-title font-semibold text-white pl-2 ">97% </span>
            </span>
      </div>
      <div className="hero-content text-sm font-[500] pb-5 pt-5">
<p>John Wick is on the run after killing a member of the international assassins guild, 
  and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
</div>

    <EventButton/>
      </div>

       <div className="flex font-sans md:flex-col gap-6 md:gap-2 text-xl text-[#9CA3AF] items-end pt-24 md:pt-0 justify-center content-center">
        <div className="flex ">1</div>
        <div className="flex">2</div>
        <div className="flex text-white"><span className="pr-1.5 pt-[13px]"><img src={rectangle} alt="" /></span>3</div>
        <div className="flex">4</div>
        <div className="flex">5</div>
      </div>
    </div>

   
    </>

   
  )
}

export default Herotext

