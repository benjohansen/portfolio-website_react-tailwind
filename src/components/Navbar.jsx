import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiX, HiMenu } from 'react-icons/hi';



function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 flex w-full justify-between px-4 backdrop-blur z-10 bg-white bg-opacity-80">
            <div className="">
                <h1 className="pt-2 pb-2 hover:text-blue-500">
                    <a href="#home">Ben</a>
                </h1>
            </div>
            
            <ul className="hidden sm:flex justify-center items-end list-none">
                {['home', 'about', 'portfolio', 'teaching', 'contact'].map((item) => (
                    <li className="flex justify-center items-end mb-4 mx-2 flex-col" key={`link-${item}`}>
                        <a className="no-underline flex-col capitalize transition-all hover:text-blue-500" href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

        <div className="pt-5 sm:hidden justify-center items-center flex w-9 h-9 rounded-full relative top-0">
            <HiMenu size="3rem" onClick={() => setToggle(true)}/>

            {toggle && (
                <motion.div className="flex fixed top-0 bottom-0 right-0 z-10 p-4 w-full h-screen justify-end items-end flex-col bg-black"
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                    <HiX size="2rem" className="text-white fixed top-4" onClick={() => setToggle(false)}/>
                    <ul className="flex justify-start items-start flex-col w-full h-full list-none m-0 p-0 uppercase">
                        {['home', 'about', 'portfolio', 'teaching', 'contact'].map((item) => (
                            <li className="m-4 text-white" key={`linkHam-${item}`}>
                                <a className="no-underline text-base uppercase font-medium" href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}

        </div>

        </nav>
    );
};

export default Navbar;