import Nav from "./Nav"
import Movietitle from "./Movietitle"



const Movieheader = () => {

 
  return (
    <div>
      <>
      <div className="movie-header w-full flex flex-cols md:grid md:grid-cols-4 font-[poppins] justify-between px-3 md:px-6 items-stretch overflow-y-auto">
        <Nav/>
        <Movietitle 
        />
      </div>
      </>
    </div>
  )
}

export default Movieheader
