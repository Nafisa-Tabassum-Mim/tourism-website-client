import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import Swal from "sweetalert2";

const MyList = () => {
    const loadedTourisms = useLoaderData();
    const [tourisms, setTourisms] = useState(loadedTourisms);

    const { user } = useContext(AuthContext);
    const [filteredTourisms, setFilteredTourisms] = useState([]);

    // Filtering tourisms based on email
    useEffect(() => {
        const filtered = tourisms.filter(tourism => tourism.email === user.email);
        setFilteredTourisms(filtered);
    }, [tourisms, user.email]);


    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/mylist/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Tourist card has been deleted.',
                                'success'
                            )
                            const remaining = tourisms.filter(tourism => tourism._id !== _id);
                            setTourisms(remaining);
                        }
                    })

            }
        })
    };

    return (
        <div className="overflow-x-auto">
            {
                filteredTourisms.length === 0 ?
                    (<div className=" h-[400px] w-full flex flex-col justify-center items-center gap-2">
                        <p className="text-2xl font-semibold">Your Tourism Data is empty</p>
                        <p className="text-2xl font-semibold">Add your data <span className="text-blue-400">now !</span> </p>
                        <Link to='/addtouristspot' className="btn text-white bg-blue-400 ">Add Now !</Link>
                    </div>)
                    :
                    (<>
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
                                            <Link to={`/updatetouristspot/${tourism._id}`}  className="text-white bg-blue-400 p-2 rounded-xl hover:bg-blue-300 mr-2">Update</Link>
                                            <button onClick={() => handleDelete(tourism._id)} className="text-blue-400 border-blue-400 border-2 p-2 rounded-xl hover:bg-blue-200">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>)
            }
        </div>
    );
};

export default MyList;
