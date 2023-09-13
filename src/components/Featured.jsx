import { SeeMoreButton } from "./Button"
import Card from "./Card"

const Featured = () => {
  return (
    <section>
      <div className='featured-container flex items-center border-red font-sans bg-white w-full justify-between pl-20 pr-20 pt-12'>
            <div className="brand flex items-start">
                      <div className="featured font-bold  pl-5 bg-white text-4xl text-black">Featured Movie</div>
                  </div>
          <SeeMoreButton/>
        </div>

        <Card/>
    </section>
    
  )
}

export default Featured
