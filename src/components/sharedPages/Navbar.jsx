import { Link, NavLink } from "react-router-dom";
import '../../App.css';


const Navbar = () => {
    const links = <>
        <li className="font-medium text-lg"><NavLink to="/" >Home</NavLink></li>
        <li className="font-medium  text-lg"><NavLink to="/alltouristspot">All Tourists Spot</NavLink></li>
        <li className="font-medium text-lg"><NavLink to="/addtouristspot">Add Tourists Spot</NavLink></li>
        {/* {
            user && <><li className="font-medium text-lg" ><NavLink to="/userprofile">User Profile</NavLink></li></>
        } */}
    </>

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 drop-btn">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost lg:text-2xl">Island <span className="text-blue-300"> Resorts </span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {/* {
                    user ?
                        (
                            <>

                                <button onClick={handleLogout} className="btn bg-blue-300 text-white mr-2">Logout</button>
                            </>

                        )
                        :
                        (<>
                            <Link to='/login' className="btn bg-blue-300 text-white">Login</Link> 
                            <Link to='/register' className="btn bg-blue-300 text-white">Register</Link>
                        </>

                        )
                } */}
                <div>
                    <button className="btn bg-blue-300 text-white mr-2">Logout</button>

                    <Link to='/login' className="btn bg-blue-300 text-white">Login</Link>
                    <Link to='/register' className="btn bg-blue-300 text-white">Register</Link>
                </div>
            </div>
        </div>
    );
};
export default Navbar;