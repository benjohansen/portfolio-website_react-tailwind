import React from 'react';
import { HiDownload } from 'react-icons/hi';

const techStack = ['JavaScript', 'HTML', 'CSS', 'Git', 'Max', 'Arduino', 'A/V Recording/Editing']


function About() {
    return (
        <>
        <a id="about" className="relative invisible scroll-mt-14"></a>
        
        <div className="flex justify-center pt-2">
                <h2 className="">about</h2>
        </div>
        
        <div className="px-3 py-5">
            <div className="container mx-auto sm:px-4">
            
                <p>This is my bio</p>

                <h2 className="text-xl leading-5 text-slate-600 font-bold py-2">
                My Tech Stack:
                </h2>

                <div className="flex flex-wrap gap-2 flex-row justify-start text-xs">
                    {techStack.map(item => (
                        <span key={`portSpan-${item}`} className="flex items-center rounded-full bg-slate-200 px-3 py-1 text-xs font-medium leading-5 text-slate-600 drop-shadow-md border-slate-600 border">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="py-2 flex justify-center">        
                    <a href='https://www.dropbox.com/s/7x70k2f70nhvs4a/johansen-resume-2023.pdf?dl=1' className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <HiDownload className="mr-1" />
                        <span>resume&nbsp;</span>
                    </a>
                </div>
            
            </div>

        </div>

        </>
    )
}

export default About;