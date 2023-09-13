import posterimg from '../assets/Posterimg.svg'
import imdb from '../assets/imdb.svg'
import tomato from '../assets/tomato.svg'
const Card = () => {
  return (
    <div className="card-container pl-5 pt-4 ">
        <div className="card grid lg:grid-cols-4 gap-12 lg:ml-20 lg:mr-20 text-black">
        {Array.from({ length: 12 }).map((_, index) => (
    <div 
    key={index}
     className="flex flex-col">
    <div className='flex'>
    <img src={posterimg} alt="poster" />
    </div>
<div className="flex pt-2 pb-1 text-xs text-[#9CA3AF]">USA, 2016 - Current</div>
<div className="flex text-black pt-1 pb-1 text-lg font-sans font-bold">Stranger Things</div>
<div className="hero-rating w-85 pt-1 pb-1 text-xs font-sans justify-between flex">
    <span className="flex imdb">
                <img src={imdb} alt="imdb" />
                <span className="logo-title font-semibold text-black pl-2">86.0 / 100</span>
            </span>
    <span className="flex rotten-tomatoes">
                <img src={tomato} alt="rottentomato" />
                <span className="logo-title font-semibold text-[#111827] pl-2 ">97% </span>
            </span>
</div>
<div className='flex text-xs pt-1 pb-1 text-[#9CA3AF]'>Action, Adventure, Horror</div>
</div>
            ))}
        </div>
    </div>
  )
}

export default Card
