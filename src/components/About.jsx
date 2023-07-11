import React from 'react';
import { HiDownload } from 'react-icons/hi';

const techStack = ['JavaScript', 'HTML', 'CSS', 'Git', 'Max', 'Arduino', 'A/V Recording/Editing'];
const softSkills = ['Collaboration','Self-Drive','Creativity','Curiosity','Communication'];
const hardSkills = ['Coding','Physical Computing','Composing','Teaching'];


function About() {
    return (
        <>
        <a id="about" className="relative invisible scroll-mt-14"></a>
        
        <div className="flex justify-center pt-2">
                <h2 className="">about</h2>
        </div>
        
        <div className="px-3 py-5">
            <div className="container mx-auto sm:px-4">
                <p className="my-4">
                My favorite technologies to work with are currently <span className="font-bold">JavaScript</span>, microcontrollers & sensors, audio/video recording/editing, and Max. Due to working modularly in Max for over 20 years, I recently picked up <span className="font-bold">React</span> very quickly … React seems to finally be a place I can really put many of my skills to work.
                </p> 
                <p className="my-4">
                I've been coding/composing interactive computer music and teaching technology for over 20 years. Making interactions intuitive for the client is a passion of mine. 
                </p>
                <p className="">
                    Download my
                    <a href='https://www.dropbox.com/s/7x70k2f70nhvs4a/johansen-resume-2023.pdf?dl=1' className="bg-blue-500 hover:bg-blue-800 text-white font-bold rounded inline-flex items-center m-1 px-3 py-1">
                        <HiDownload className="mr-1" />resume
                    </a>
                    for a deeper dive into my expertise and experience.
                </p> 
            </div>
        </div>    
            <div className="">  

                <h2 className="flex justify-center text-xl leading-5 font-bold pb-2">
                Soft Skills:
                </h2>

                <div className="flex flex-wrap gap-2 flex-row justify-center">
                    {softSkills.map(item => (
                        <span key={`portSpan-${item}`} className="flex items-center rounded-full bg-slate-200 px-3 py-1 font-medium leading-5 text-slate-600 drop-shadow-md border-slate-600 border">
                            {item}
                        </span>
                    ))}
                </div>

                <h2 className="flex justify-center text-xl leading-5 font-bold pb-2 pt-4">
                Hard Skills:
                </h2>

                <div className="flex flex-wrap gap-2 flex-row justify-center">
                    {hardSkills.map(item => (
                        <span key={`portSpan-${item}`} className="flex items-center rounded-full bg-slate-200 px-3 py-1 font-medium leading-5 text-slate-600 drop-shadow-md border-slate-600 border">
                            {item}
                        </span>
                    ))}
                </div>


                <h2 className="flex justify-center text-xl leading-5 font-bold pb-2 pt-4">
                Tech Stack:
                </h2>

                <div className="flex flex-wrap gap-2 flex-row justify-center">
                    {techStack.map(item => (
                        <span key={`portSpan-${item}`} className="flex items-center rounded-full bg-slate-200 px-3 py-1 font-medium leading-5 text-slate-600 drop-shadow-md border-slate-600 border">
                            {item}
                        </span>
                    ))}
                </div>

            </div>

        </>
    )
}

export default About;