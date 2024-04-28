import { useLoaderData, useParams } from "react-router-dom";


const TouristDetails = () => {

    const tourisms = useLoaderData()
    const { _id } = useParams()
    const tourism = tourisms.find(tourism => tourism._id === _id)
    console.log(tourism)

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-14 mt-8 mx-4 mb-8">
            {/* <Helmet>
                <title> {tourism.tourism_title} | details </title>
            </Helmet> */}
            <div className="w-3/4 md:w-1/2">
                <img src={tourism.photo} className="max-h-[560px] w-full mb-8" alt="tourism Cover" />
            </div>

            <div className="w-full md:w-1/2">
                <h1 className="text-2xl md:text-4xl font-bold">{tourism.location}</h1>
                <p className="text-lg font-medium border-b-2 pb-4 my-4" >{tourism.countryName}</p>
                <p className="text-lg font-medium border-b-2 pb-4 my-4" >{tourism.seasonality}</p>
                <p className="text-xl font-medium mt-4 mb-4"> <span className="font-extrabold"> </span>{tourism.shortDescription} </p> 
           
                <div className="my-4">
                    <div className="flex gap-[160px]">
                        <p className="font-medium">Average Cost - </p>
                        <p className="font-bold text-red-600">{tourism.averageCost} $</p>
                    </div>
                    <div className="flex gap-[135px]">
                        <p className="font-medium">Visitors Per Year - </p>
                        <p className="font-bold">{tourism.totalVisitorsPerYear}</p>
                    </div>
                    <div className="flex gap-[170px]">
                        <p className="font-medium">Travel Time - </p>
                        <p className="font-bold ">{tourism.travelTime}</p>
                    </div>
                </div>
                {/* <div >
                    <button className="btn border-2 border-orange-400 text-orange-500 bg-white font-bold mr-4 px-6">Book Now</button>
                </div> */}

            </div>
        </div>
    );
};

export default TouristDetails;