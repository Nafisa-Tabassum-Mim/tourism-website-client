import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const {createUser,setLoading} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, photo, email, password)


        // check pass 
        if (password.length < 6) {
            toast.warning('Password must be 6 character long !')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.warning('Password should have at least one uppercase !')
            return
        }
        else if (!/[a-z]/.test(password)) {
            toast.warning('Password should have at least one lowercase !')
            return
        }

        // create user 
        createUser(email, password)
            .then((result) => {
                toast.success('Your id is created successfully')
            })
            .catch((error) => {
                setLoading(false)
                toast.error(error.code)
            })
    }

    return (
        <div className="flex justify-center mx-4">
            {/* <Helmet>
                <title>Register </title>
            </Helmet> */}
            <div className="card  w-full max-w-md shadow-md shadow-blue-300 shadow-t-2 bg-base-100 my-24 ">
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered " required />
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-300 text-white hover:bg-blue-400 ">Register</button>
                    </div>
                    <p className="text-center mt-4">Already have an account ? <Link className="text-blue-300 font-bold" to="/login">Login</Link> </p>

                </form>

            </div >
            <ToastContainer />
        </div>
    );
};

export default Register;