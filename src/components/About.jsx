import React from 'react';
import { HiDownload } from 'react-icons/hi';


function About() {
    return (
        <>
        <a id="about" className="relative invisible scroll-mt-14"></a>
        <div className="flex justify-center pt-2">
                <h2 className="">about</h2>
        </div>
        
        <div className="flex items-center justify-center flex-col text-center pb-6">
            <p className="max-w-xl mb-6">This is my bio</p>
            <a href='https://www.dropbox.com/s/7x70k2f70nhvs4a/johansen-resume-2023.pdf?dl=1' className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <HiDownload className="mr-1" />
                <span>resume</span>
            </a>
        </div>
        
        </>
    )
}

export default About;