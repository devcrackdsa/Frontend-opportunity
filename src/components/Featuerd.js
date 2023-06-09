import { NavLink } from "react-router-dom" 
 import Card from "./Card"
 import Card2 from "./Card2"
 import Card3 from "./Card3"
 import Card4 from "./Card4"


const Featuerd = ({catogery,catvalue,internship}) => {
  
  return (
    <>
     {(typeof(internship)==='string') ?<>
      {/* <p className="flex justify-center py-4 text-2xl items-center text-indigo-600 font-bold">Currently Not Available</p> */}
     </>: <>
    <div className='flex flex-row pt-[50px] justify-between'>
    <h1 className='poppins-font font-[500px] lg:text-[32px] capitalize md:text-2xl text-lg md:font-semibold text-[#110A60] inline-block'>{catogery} </h1>
    {(catogery!=='Top Results')?
   <NavLink to={`${catvalue}/all_intern`}> <p className='sm:text-xl text-lg text-blue-500 cursor-pointer capitalize hover:text-blue-800 '>see  all</p></NavLink>:''}
    </div>
    <div className='flex xl:justify-around justify-center flex-row flex-wrap pt-3 gap-10 px-3 sm:pt-7 sm:px-5 '>
       {internship.map((data,index)=>{
          return <Card4 data={data} key={index}/>
        })}
    </div>
    </>}
    </>
    
    
      
 )
}

export default Featuerd
