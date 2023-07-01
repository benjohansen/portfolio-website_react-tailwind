import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

function PortfolioItem({ title, imgUrl, stack, link, summary }) {
    return (
        <>
			<div className="group mb-5">
                <a href={link} className="group/link">
				    <div className="bg-slate-200 gap-4 sm:flex flex-row group-hover:drop-shadow group-hover:bg-slate-400/50 z-0 rounded-md transition">
					    <div className="m-2 mt-1 sm:basis-3/4 sm:order-2">
						    <h6 className="text-xl flex flex-row mb-1 font-bold">{`${title} `}<FiArrowUpRight className="mt-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" /></h6>
						    <div className="mb-2">{summary}</div>
						    <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                                {stack.map(item => (
                                    <span key={`portSpan-${item}`} className="flex items-center rounded-full bg-teal-100/50 px-3 py-1 text-xs font-medium leading-5 text-teal-600 drop-shadow-md">
                                        {item}
                                    </span>
                                ))}
                            </div>
					    </div>
                        <div className="pb-2 w-52 m-2 sm:ml-2 sm:mr-2 mt-2 sm:basis-1/4 sm:order-1">
					        <img          
                            src={imgUrl}
                            alt="portfolio"
                            className="max-w-full h-auto bg-gray-700"
                            />
					    </div>
                    </div>
                </a>
			</div>
        </>
    )
}

export default PortfolioItem;