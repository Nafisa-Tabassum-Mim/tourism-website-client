import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../firebase/AuthProvider';


const AddTourist = () => {

    const { user } = useContext(AuthContext)

    const handleAddTourism = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const tourismName = form.tourists_spot_name.value;
        const countryName = form.country_Name.value;
        const location = form.location.value;
        const shortDescription = form.short_description.value;
        const averageCost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const email = form.email.value;
        const name = form.name.value;

        const newTourism = { photo, tourismName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear, email, name }


        // send data to the server
        fetch('http://localhost:5000/tourism', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTourism)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset()
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourism card Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })
    }

    return (
        <div className="bg-[#eaf6f7] p-24">
            <h2 className="text-3xl font-extrabold my-4">Add Tourists Spot Page </h2>
            <form onSubmit={handleAddTourism}>
                {/* form  row */}
                <div className="md:flex mb-8 gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label ">
                            <span className="label-text font-medium text-lg">Tourists Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex mb-8 gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country_Name" placeholder="Country Name" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                {/* form  row */}
                <div className="md:flex mb-8 gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                {/* form  row */}
                <div className="md:flex mb-8 gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                {/* form  row */}
                <div className="mb-8 gap-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Total Visitors Per Year</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex mb-8 gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="User Email" defaultValue={user.email} className="input input-bordered w-full" readOnly required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="User Name" defaultValue={user.displayName} className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>


                <input type="submit" value="Add" className="btn btn-block bg-blue-300 font-medium text-lg" />

            </form>
        </div>
    );
};

export default AddTourist;