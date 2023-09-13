import { EventButton } from "./Button"
import imdb from '../assets/imdb.svg'
import tomato from '../assets/tomato.svg'



const Herotext = () => {
  return (
    <>
    <div className=" grid lg:grid-cols-2 column w-full h-[90vh] font-sans content-center ">
      <div className="text-white flex ml-[8vw] flex-col w-[50%]">
        <h1 className="text-5xl font-bold pb-5">John Wick 3 : Parabellum</h1>

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
    </div>
   
    </>

   
  )
}

export default Herotext

