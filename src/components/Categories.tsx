import React from "react";
import { Link } from "react-router-dom";
import './categories.css'


const Category: React.FC = () => {
    return (
        <div className="flex justify-center">
        <div className="category bg-slate-300 my-4 mx-6">
            <div className="category-image">
                <img src="/Web/undraw_designer_girl_re_h54c.svg" alt="designer girl"/>
            </div>
            <div className="category-details">
                <h4>Design</h4>
                <Link to="#" className="text-blue-600">View More</Link>
            </div>
        </div>
        {/**Second One */}
        <div className="category bg-slate-300 my-4 mx-6">
            <div className="category-image">
                <img src="/Web/undraw_server_cluster_jwwq.svg" alt="designer girl"/>
            </div>
            <div className="category-details">
                <h4>Programming</h4>
                <Link to="#" className="text-blue-600">View More</Link>
            </div>
        </div>
        {/**Third One */}
        <div className="category bg-slate-300 my-4 mx-6">
            <div className="category-image">
                <img src="/Web/undraw_investing_re_bov7.svg" alt="designer girl"/>
            </div>
            <div className="category-details">
                <h4>Finance</h4>
                <Link to="#" className="text-blue-600">View More</Link>
            </div>
        </div>
        {/**Fourth One */}
        <div className="category bg-slate-300 my-4 mx-6">
            <div className="category-image">
                <img src="/Web/undraw_art_museum_-8-or4.svg" alt="designer girl"/>
            </div>
            <div className="category-details">
                <h4>Art</h4>
                <Link to="#" className="text-blue-600">View More</Link>
            </div>
        </div>
        </div>
    )
}

function Categories() {
    return (
        <div className="min-h-screen bg-stone-800 text-center font-extrabold leading-loose text-slate-300">
            <h2 className="text-4xl p-6">OUR TOP CATEGORIES</h2>
            <p className="p-6 text-lg">Take high quality courses from the best online instructors and develop your skills</p>
            <div>
                {/* <Category category={}/> */}
                <Category />
            </div>
        </div>
    );
}

export default Categories;