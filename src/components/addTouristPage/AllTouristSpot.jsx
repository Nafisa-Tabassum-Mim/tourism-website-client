import { Link, useLoaderData } from "react-router-dom";


const AllTouristSpot = () => {

    const tourisms = useLoaderData()
    console.log(tourisms)

    return (
        <div>
            <div>
                <p className="text-3xl font-semibold text-center my-8">All Tourists <span className="text-blue-400"> Spots</span></p>
                {tourisms.map((tourism) => (
                    <div key={tourism._id}>
                        <div className="card md:card-side shadow-sm border shadow-blue-300 my-4 mx-4">
                            <figure>
                                <img className="m-8 rounded-xl h-[200px] w-full md:w-[200px]" src={tourism.photo} alt="Album" />
                            </figure>
                            <div className="mx-4">
                                <h1 className="text-xl font-bold md:mt-8 mb-2">{tourism.tourismName}</h1>

                         
                                <div className="flex border-b-2 pb-2 items-center font-semibold">
                                    <p className="flex items-center mr-8 gap-2 ">  Visitors per year - {tourism.totalVisitorsPerYear} </p>
                                    <p className="flex items-center gap-2">Best Season - {tourism.seasonality} </p>
                                </div>
                                <div className="flex border-b-2 pb-2 items-center font-semibold">
                                    <p className="flex items-center mr-28 gap-2 ">  Area - {tourism.travelTime} </p>
                                    <p className="flex items-center gap-2">Average Cost - {tourism.averageCost} dollar </p>
                                </div>
                                <div className="my-2">
                                    <button className="text-[#328EFF] rounded-2xl bg-[#328EFF26] font-semibold px-4 mr-2 mb-2 py-[2px]">Location - {tourism.location} </button>
                              
                                </div>
                                <div>
                                    <Link to={`/${tourism._id}`} className="btn mb-2 bg-blue-500 font-semibold text-white"> View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* </div>) */}
        </div >
    );
};

export default AllTouristSpot;