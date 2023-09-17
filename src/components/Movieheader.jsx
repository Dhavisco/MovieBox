import Nav from "./Nav"
import Movietitle from "./Movietitle"



const Movieheader = () => {

 
  return (
    <div>
      <>
      <div className="movie-header w-full grid grid-cols-4 font-[poppins] justify-between pr-6 pl-6 items-stretch">
        <Nav/>
        <Movietitle 
        />
      </div>
      </>
    </div>
  )
}

export default Movieheader
