import { Link } from "react-router-dom";

const TourismSection = ({ tourism }) => {

    const { _id, photo, tourismName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear, email, name } = tourism


    return (
        <div>
            <div className="bg-base-100 m-4  shadow-md shadow-blue-300" >
                <figure className=" ">
                    <img src={photo} alt="Shoes" className=" h-[280px] w-full" />
                </figure>

                <div className="card-body ">
                    <h2 className="text-xl font-bold">{tourismName}</h2>
                    <p className="text-base font-medium border-b-2 pb-4 border-dashed" > {countryName}</p>
                    <div className="font-medium flex justify-between">
                        <p>{location}</p>
                        <div className="flex items-center">
                            <p className="text-red-500">Cost - {averageCost}$</p>
                        </div>
                    </div>
                    <div className="font-medium flex justify-between">
                        <p>{travelTime}</p>
                        <div className="">
                            <p>{seasonality}</p>
                        </div>
                    </div>
                    <div className="font-medium flex justify-between">
                        <Link to={`${_id}`} className="btn text-white bg-blue-400 "> View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourismSection;