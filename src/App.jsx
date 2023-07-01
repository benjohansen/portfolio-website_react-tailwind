import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Name from './components/Name';
import Headshot from './components/Headshot';
import Compositions from './components/Compositions';

function App() {

  return (
    <>
    	<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-nunito">
      		<div className="max-w-5xl w-11/12 mx-auto">
        		<Navbar />
				<Name />
      		</div>
			<div className="w-full mx-auto">
				<Headshot />
      		</div>
			<div className="sm:max-w-5xl w-11/12 mx-auto">
        		<About />
        		<Portfolio />
				<Compositions />
        		<Teaching />
        		<Contact />
        		<Footer />
      		</div>
    	</div>
    </>
  )
}

export default App
