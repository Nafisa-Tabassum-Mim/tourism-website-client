import React from 'react';

const MyList = () => {
    const handleDetails = () => {
        // Handle details button click
    };

    const handleDelete = () => {
        // Handle delete button click
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-full whitespace-nowrap my-8 ">
                    <caption className="text-2xl font-semibold mb-4">My Tourism Data</caption>
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-2 py-3 text-left">Tourism Name</th>
                            <th className="px-2 py-3 text-left">Country Name</th>
                            <th className="px-2 py-3 text-left">Location</th>
                            <th className="px-2 py-3 text-left">Total Visitors per Year</th>
                            <th className="px-2 py-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-4">Sundarban</td>
                            <td className="px-2 py-4">Bangladesh</td>
                            <td className="px-2 py-4">Khulna</td>
                            <td className="px-2 py-4">500,000</td>
                            <td className="px-2 py-4">
                                <button onClick={handleDetails} className="text-white bg-blue-400 p-2 rounded-xl hover:bg-blue-300 mr-2">Details</button>
                                {/* <button onClick={handleDelete} className="text-white border-blue-400 b-2 p-2 rounded-xl hover:bg-blue-300">Delete</button> */}
                                <button onClick={handleDelete} className="text-blue-400 border-blue-400 border-2 p-2 rounded-xl hover:bg-blue-200">Delete</button>

                            </td>
                        </tr>
                        {/* Add more rows here if needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
