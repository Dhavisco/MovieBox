import { SeeMoreButton } from "./Button"
import Card from "./Card"
import Footer from "./Footer"

const Featured = () => {
  return (
    <section>
      <div className='featured-container flex items-center font-sans bg-white w-full justify-between pl-8 pr-8 pt-20'>
            <div className="brand flex items-start">
                      <div className="featured font-bold bg-white lg:text-4xl text-black">Featured Movie</div>
                  </div>
          <SeeMoreButton/>
        </div>

        <Card/>
        
        <Footer/>
    
    </section>
    
  )
}

export default Featured
