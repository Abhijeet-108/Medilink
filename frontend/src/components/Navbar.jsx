import React from 'react'

function Navbar() {
    return (
        <div>
            <header className="bg-blue-400 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div class="flex items-center space-x-3">
                <div className="w-10 h-1 flex items-center justify-center">
                <span className="text-blue-900 font-bold"> <img src="Logo_Medilink.png" alt="abh" className='w-14 h-10' /></span>
                </div>
                <span class="text-xl font-semibold">MEDI<span class=" text-blue-500">LINK</span></span>
                
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6 text-sm">
                <a href="#" className="hover:text-gray-300">HOME</a>
                <div class="relative group">
                <a href="#" className="hover:text-gray-300">SERVICES</a>
                {/* Dropdown Menu*/}
                <div class="absolute left-0 top-full hidden group-hover:block bg-white text-blue-900 shadow-lg mt-2 py-3 rounded">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Orthopedics</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200">Cancer Care</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200">Nephrology</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200">Cardiac Services</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200">Pediatrics</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200">Emergency Medicine</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200">Pulmonary Services</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200">Neurology</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200">Mental Health & Wellness</a>
                </div>
                </div>
                <a href="#" class="hover:text-gray-300">LOCATIONS</a>
                <a href="#" class="hover:text-gray-300">PROVIDERS</a>
                <a href="#" class="hover:text-gray-300">PATIENTS & VISITORS</a>
                <a href="#" class="hover:text-gray-300">CONTACT US</a>
            </nav>
            {/* Contact Us Button*/}
            <div class="hidden md:block">
                <button class="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200">Contact Us</button>
                <button class="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200 ml-2">Login</button>
            </div>
            </div>
        </header>
    </div>
    )
};

export default Navbar
