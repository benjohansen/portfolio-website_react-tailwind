import React from 'react';
import { HiDownload } from 'react-icons/hi';

const techStack = ['JavaScript', 'React', 'HTML', 'CSS', 'Git', 'Max', 'Arduino', 'A/V Recording/Editing','Logic Pro', 'Dorico', 'DaVinci Resolve','Adobe CC'];


function About() {
    return (
        <>
        <a id="about" className="relative invisible scroll-mt-14"></a>
        
        <div className="flex justify-center pt-2">
                <h2 className="">about</h2>
                
        </div>
        <div className="flex justify-center pt-2">
                <a href='/assets/johansen-resume-2024.pdf' className="bg-blue-500 hover:bg-blue-800 text-white font-bold rounded inline-flex items-center p-2 px-4">
                        <HiDownload className="mt-1 mr-1" />resume
                </a>
        </div>
        <div className="px-3 pb-4">
            <div className="container mx-auto sm:px-4">
                <h3 className="font-bold my-4">
                I am curious.
                </h3>
                <p className="my-4 leading-6">
                    I've been coding for art projects and teaching technology & creativity for nearly 20 years. Curiosity and self-drive has lead me into learning technologies in many different areas, both hardware (from analog synths to microcontrollers) and software (from Max & Arduino to <span className="font-bold">JavaScript</span>/HTML/CSS).
                    I love intuitive interactions and <span className="font-bold">modularity</span>. Download my
                    <a href='/assets/johansen-resume-2024.pdf' className="font-bold text-blue-500 hover:text-blue-800">
                        &nbsp;resume&nbsp;
                    </a>
                    for a deeper dive into my expertise and experience.
                </p> 

               
                <h5 className="uppercase leading-5 pt-4 my-1 font-bold">My Soft Skills:</h5>
                <p> 
                    Collaboration, Self-Drive, Creativity, Ingenuity, and Communication
                </p>

                <h5 className="uppercase leading-5 pt-4 my-2 font-bold">
                My Tech Stack:
                </h5>

                <div className="flex flex-wrap gap-2 flex-row justify-start">
                    {techStack.map(item => (
                        <span key={`portSpan-${item}`} className="flex items-center rounded-full bg-slate-200 px-3 py-1 leading-5 drop-shadow-md border-slate-600 border">
                            {item}
                        </span>
                    ))}
                </div>

            </div>
        </div>    
            <div className="">  
{/*
                <h4 className="flex justify-center leading-5 pb-2">
                Soft Skills:
                </h4>

                <div className="flex flex-wrap gap-2 flex-row justify-center">
                    {softSkills.map(item => (
                        <span key={`portSpan-${item}`} className="flex items-center rounded-full bg-slate-200 px-3 py-1 font-medium leading-5 text-slate-600 drop-shadow-md border-slate-600 border">
                            {item}
                        </span>
                    ))}
                </div>

                <h4 className="flex justify-center leading-5 pb-2 pt-4">
                Hard Skills:
                </h4>

                <div className="flex flex-wrap gap-2 flex-row justify-center">
                    {hardSkills.map(item => (
                        <span key={`portSpan-${item}`} className="flex items-center rounded-full bg-slate-200 px-3 py-1 font-medium leading-5 text-slate-600 drop-shadow-md border-slate-600 border">
                            {item}
                        </span>
                    ))}
                </div>
*/}



                

            </div>

        </>
    )
}

export default About;