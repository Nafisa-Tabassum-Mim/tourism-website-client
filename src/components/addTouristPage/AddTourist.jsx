
const AddTourist = () => {
    return (
        <div className="bg-[#eaf6f7] p-24">
            <h2 className="text-3xl font-extrabold my-4">Add Tourists Spot Page </h2>
            <form >
                {/* form  row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label ">
                            <span className="label-text font-medium text-lg">Tourists Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country_Name" placeholder="Country Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form  row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form  row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form  row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >Total Visitors Per Year</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="User Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-medium text-lg" >User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="User Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            

                <input type="submit" value="Add" className="btn btn-block bg-blue-300 font-medium text-lg" />

            </form>
        </div>
    );
};

export default AddTourist;