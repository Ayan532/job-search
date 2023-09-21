import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/Slices/jobSlice";



const Home = () => {
  const dispatch=useDispatch()
  const [keyword, setkeyword] = useState("");
  useEffect(()=>{
    dispatch(getJobs(''))
  },[dispatch])
  const {jobs} =useSelector((state)=>state.jobs)
    
    const handleSearch=async()=>{
      await dispatch(getJobs(keyword))
      setkeyword('')
    }
    return (
        <div className="h-full w-full flex flex-col">

        <div className="relative w-full h-[60vh] bg-blue-600  flex justify-center items-center">

        <div className=" flex gap-20 w-[80%] md:w-[60%] lg:w-[40%] text-white  justify-center items-center">
            <div className="flex flex-col gap-4 text-white w-full">
            <div className="bg-white p-8  rounded-lg shadow-md w-full mb-8">
            <h1 className="text-4xl font-semibold mb-4 text-black">Find Your Dream Job</h1>
        <p className="text-lg text-black mb-3">Explore job opportunities in your preferred programming language.</p>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-l-md text-black"
            placeholder="E.g., Javascript,Python etc..."
            value={keyword}
            onChange={(e) => setkeyword(e.target.value)}
          />
       
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
                
                </div>
            </div>
        </div>
        
     
    </div>
           
    <div>
         <div className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Job Listings</h1>
        <div className="h-full flex flex-col gap-4"> 

        {jobs && jobs?.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
        </div>
      </div>
    </div>
    </div>
        </div>
    );
}

export default Home