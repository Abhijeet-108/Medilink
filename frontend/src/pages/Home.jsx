import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <div>
                <img src="pic_hospital.png" alt="" />
            </div>
            <footer className='bg-blue-900 text-white py-10 '>
                <Footer />
            </footer>
        </div>
    )
}

export default Home
