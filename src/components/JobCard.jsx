/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const JobCard = ({job}) => {
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
    <h2 className="text-xl font-semibold">{job.title}</h2>
    <p className="text-gray-500">{job.company}</p>
    <p className="text-gray-700 mt-2 mb-2">{job.description}</p>
    <span className="py-1 px-2 rounded-full bg-blue-500 text-white text-sm">{job.programmingLanguage}</span>
    <div className="flex justify-between items-center mt-4">
      <p className="text-blue-500">{job.location}</p>
      <p className="text-gray-600">{job.datePosted}</p>
    </div>
    <div className=" md:flex md:justify-end">
 

 <Link className="w-full md:w-[30%]" to={`/job/${job.id}`}>
    <button
     
      className="mt-4 block w-full  bg-blue-500 text-white rounded-md py-2 px-4 text-center font-semibold hover:bg-blue-600"
    
    >
     View Details
    </button>
 </Link>
    </div>
  </div>
  )
}

export default JobCard