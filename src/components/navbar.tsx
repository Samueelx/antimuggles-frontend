import React from "react";
import { NavLink } from "react-router-dom";

const Navbar:React.FC = () => {
    return (
        <>
        <nav className="p-4 text-slate-200">
            <NavLink to="/courses"
            className="m-2">
                Teachers
            </NavLink>

            <NavLink to="/courses"
            className="m-2">
                Courses
            </NavLink>

            <NavLink to="/courses"
            className="m-2">
                Scholarships
            </NavLink>

            <NavLink to="/courses"
            className="m-2">
                Pricing
            </NavLink>
        </nav>
        </>
    );
}

export default Navbar;