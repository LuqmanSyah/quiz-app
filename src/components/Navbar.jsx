import React from "react";

const Navbar = () => {
    return (
        <header className="py-5 max-w-7xl mx-auto">
            <nav className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Quiz</h1>

                <button className="bg-cyan-600 hover:bg-cyan-700 py-3 px-5 rounded-full font-semibold">Login</button>
            </nav>
        </header>
    );
};

export default Navbar;
