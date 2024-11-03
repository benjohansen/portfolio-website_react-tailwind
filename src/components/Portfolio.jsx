import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
    return (
        
        
        
        <div className="group/list px-3 py-5">
		    <div className="container mx-auto sm:px-4">
                <h3 className="sm:text-3xl text-2xl font-bold uppercase mx-auto py-5">Coding Projects</h3>
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
        
    )
}

export default Portfolio;