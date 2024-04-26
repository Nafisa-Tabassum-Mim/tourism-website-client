import { Outlet } from "react-router-dom";

import Navbar from "../sharedPages/Navbar";
import Footer from "../sharedPages/Footer"

const Root = () => {
    return (
        <div>
                  <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;