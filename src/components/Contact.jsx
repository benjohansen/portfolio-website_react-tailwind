import React from 'react';
import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri';
import { FaRegEnvelope } from 'react-icons/fa';



function Contact() {
    return (
        <div className="mt-12">
        <a id="contact" className="relative invisible scroll-mt-14"></a>
        <div className="flex justify-center">
            <h2 className="">contact</h2>
        </div>
        <div className="flex justify-center pt-6">
            <a href="https://www.linkedin.com/in/bdjohansen/"><RiLinkedinBoxLine className="text-blue-500 hover:text-blue-700 mx-1 sm:mx-2 hover:bg-gray-200/50 sm: p-2 rounded-xl sm:rounded-3xl text-8xl" /></a> 
            <a href="https://github.com/benjohansen"><RiGithubLine className="text-blue-500 hover:text-blue-700 mx-1 sm:mx-2 hover:bg-gray-200/50 sm: p-2 rounded-xl sm:rounded-3xl text-8xl" /></a>
            <a href="mailto:ben@benjohansen.com"><FaRegEnvelope className="text-blue-500 hover:text-blue-700 mx-1 sm:mx-2 hover:bg-gray-200/50 sm: p-2 rounded-xl sm:rounded-3xl text-8xl" /></a>
        </div>
        </div>
    )
}

export default Contact;