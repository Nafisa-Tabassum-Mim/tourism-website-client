import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const Login = () => {
    return (
        <div className="flex justify-center mx-4">
            {/* <Helmet>
                <title> Login </title>
            </Helmet> */}
            <div className="card  w-full max-w-md shadow-md shadow-blue-300 shadow-t-2 bg-base-100 my-24 ">
                <form className="card-body" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input type="password" name="password" placeholder="password" id="" />
                            {/* <input type={showPass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" required />
                            <span className="absolute top-3 right-3" onClick={() => setshowPass(!showPass)}>
                                {showPass ? <IoEye /> : <IoEyeOff />
                                }

                            </span> */}
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-300 text-white hover:bg-blue-300 ">Login</button>
                    </div>
                    <div className="text-center">
                        You can also login by
                    </div>
                    <div className="flex items-center  justify-center">
                        <div className="border-b border-black w-full"></div>
                        <div className="flex items-center gap-1 relative z-10">
                            <button  className="border border-blue-300 rounded-lg p-2 text-[30px]"><FcGoogle /></button>
                            <p className="text-gray-500">or</p>
                            <button  className="border border-blue-300 rounded-lg p-2 text-[30px]"><SiGithub /></button>
                        </div>
                        <div className="border-b border-black w-full"></div>
                    </div>
                    <p className="text-center mt-4">Do not have an account ? <Link className="text-blue-300 font-bold" to="/register">Register</Link> </p>

                </form>

            </div >
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default Login;