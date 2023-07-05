import React from "react"
import Navbar from "./navbar"
import './header.css'

const NavBtns: React.FC = () => {
 return <div className="flex justify-around items-center">
    <button className="button-48" role="button"><span className="text">Login</span></button>
    <button className="button-48" role="button"><span className="text">Sign Up</span></button>
 </div>
}

const Header:React.FC = () => {
    return (
        <header className="flex justify-around items-center bg-stone-900 h-1/4 sticky top-0 left-0 right-0 z-50">
            <h2 className="text-3xl font-bold m-4 text-slate-200">Antimuggles</h2>
            <Navbar />
            <NavBtns />
        </header>
    )
}

export default Header