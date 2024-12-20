import React from 'react';
import { MdLocationPin, MdSupportAgent } from 'react-icons/md';


const Footer = () => {
    return (
        <div className='bottom-0 inset-x-0'>
        <footer className="bg-gradient-to-r from-orange-700 to-blue-950 text-white font-bold py-4 text-xs/5">
            <div className="container mx-auto text-center">
                <div className='flex justify-evenly py-10'>
                    <div className='flex flex-col items-start space-y-2'> 
                       <p className='flex place-items-center gap-1'> <MdSupportAgent size={30}/> Contact Support </p> 
                       <p className='text-justify'>Our Help Lines: <br/>
                       +2348098009406,<br/> 
                       +2348056072406<br/>
                       Email: <br/>
                       support@afcomm.ng</p>
                    </div>
                    <div className='flex flex-col items-start space-y-2'> 
                       <p className='flex place-items-center gap-1'> <MdLocationPin size={30}/> Our Office </p> 
                       <p className='text-justify'>4 Arukweh Street, <br/> Aradagun Badagry<br/>
                       Lagos, Nigeria</p>
                    </div>
                </div>
                {/* <div className="flex flex-col justify-center items-center">
                    <p>Quick Links</p>
                    <div className="flex justify-center space-x-3">
                    <a href="#services" className="hover:text-gray-300">Services</a>
                    <a href="#products" className="hover:text-gray-300">Products</a>
                    <a href="#store" className="hover:text-gray-300"></a>
                    <Link to="/contact" className="hover:text-gray-300">Contact us</Link>
                    </div>
                </div> */}
                <hr className="border-gray-300 my-4" /> 
                <p className="mb-2">&copy; {new Date().getFullYear()} Afcomm Technology. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;