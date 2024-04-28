
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllTouristSpot = () => {
    const tourisms = useLoaderData();
    const [sortedTourisms, setSortedTourisms] = useState(tourisms);

    const sortByCost = (order) => {
        const sorted = [...tourisms].sort((a, b) => {
            if (order === "ascending") {
                return a.averageCost - b.averageCost;
            } else {
                return b.averageCost - a.averageCost;
            }
        });
        setSortedTourisms(sorted);
    };

    return (
        <div>
            <div>
                <p className="text-3xl font-semibold text-center my-8">All Tourists <span className="text-blue-400 mr-2"> Spots</span>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 text-white bg-blue-400 text-xl">Sort</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => sortByCost("ascending")}>Cost - low to high </a></li>
                            <li><a onClick={() => sortByCost("descending")}>Cost - high to low</a></li>
                        </ul>
                    </div>
                </p>
                {sortedTourisms.map((tourism) => (
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
        </div >
    );
};

export default AllTouristSpot;
