import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const MyList = () => {
    const tourisms = useLoaderData();
    const { user } = useContext(AuthContext);
    const [filteredTourisms, setFilteredTourisms] = useState([]);

    // Filtering tourisms based on email
    useEffect(() => {
        const filtered = tourisms.filter(tourism => tourism.email === user.email);
        setFilteredTourisms(filtered);
    }, [tourisms, user.email]);
 
    const handleDetails = () => {
     
    };

    const handleDelete = () => {
   
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap my-8">
                <caption className="text-2xl font-semibold mb-4">My Tourism Data</caption>
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-2 py-3 text-left">Tourist Spot Name</th>
                        <th className="px-2 py-3 text-left">Country Name</th>
                        <th className="px-2 py-3 text-left">Location</th>
                        <th className="px-2 py-3 text-left">Total Visitors per Year</th>
                        <th className="px-2 py-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {filteredTourisms.map((tourism) => (
                        <tr key={tourism._id}>
                            <td className="px-2 py-4">{tourism.tourismName}</td>
                            <td className="px-2 py-4">{tourism.countryName}</td>
                            <td className="px-2 py-4">{tourism.location}</td>
                            <td className="px-2 py-4">{tourism.totalVisitorsPerYear}</td>
                            <td className="px-2 py-4">
                                <button onClick={handleDetails} className="text-white bg-blue-400 p-2 rounded-xl hover:bg-blue-300 mr-2">Details</button>
                                <button onClick={handleDelete} className="text-blue-400 border-blue-400 border-2 p-2 rounded-xl hover:bg-blue-200">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyList;
