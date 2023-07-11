import React from 'react';

function Teaching() {
    return (
        <div className="mt-12">
        <a id="teaching" className="relative invisible scroll-mt-16"></a>
        <div className="flex justify-center">
                <h2 className="">teaching</h2>
        </div>

        
        <div className="px-3 py-5">
            <div className="container mx-auto sm:px-4">
            <p>
                I am currently a Senior Lecturer at Baylor University and have over 20 years experience teaching coding for electroacoustic music, acoustic music composition, digital scholarship (data visualization), technology for musicians, saxophone, and band.
            </p>

            <ul className="list-disc pl-4 pt-4">
                <li>
                    <span className="font-bold">Technology for Musicians (MUS1331)</span> = provides a technological foundation for all musicians: from coding and computer works to documenting concerts using three or more video cameras.
                </li>
                <li>
                    <span className="font-bold">Electroacoustic Music Composition (MUS4203)</span> = literature study, composition, and performance of fixed and interactive electroacoustic music: from analog synthesizers to coding interactive music using Max and Arduino microcontrollers.
                </li>
                <li>
                    <span className="font-bold">Advanced Electroacoustic Music Composition (MUS4V09)</span> = one-on-one lessons focusing on a substantial electronic music project.
                </li>
                <li>
                    <span className="font-bold">Composition Lessons</span> = one-on-one lessons
                </li>
            </ul>

            </div>

        </div>
        
        </div>
    )
}

export default Teaching;