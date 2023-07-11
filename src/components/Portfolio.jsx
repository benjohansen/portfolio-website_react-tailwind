import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
    return (
        <div className="mt-12">
        <a id="portfolio" className="relative invisible scroll-mt-16"></a>
        <div className="flex justify-center">
            <h2 className="">portfolio</h2>
        </div>
        <div className="group/list px-3 py-5">
		    <div className="container mx-auto sm:px-4">
                {portfolio.map(project => (
                    <PortfolioItem
                        key={project.idb}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        summary={project.summary}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}

export default Portfolio;