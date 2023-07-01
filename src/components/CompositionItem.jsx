import React from 'react';
import { RiYoutubeFill, RiFilePaper2Line, RiPlayCircleLine, RiAmazonFill } from 'react-icons/ri';
import { FaFlickr } from 'react-icons/fa';


function YoutubeLink({link}) {
    if (link !== null) {
    return <a href={link}><RiYoutubeFill className="fill-slate-500 hover:fill-blue-700" /></a>
    }}

function ScoreLink({link}) {
    if (link !== null) {
    return <a href={link}><RiFilePaper2Line className="fill-slate-500 hover:fill-blue-700" /></a>
    }}

function AudioFileLink({link}) {
    if (link !== null) {
    return <a href={link}><RiPlayCircleLine className="fill-slate-500 hover:fill-blue-700" /></a>
    }}

function AmazonLink({link}) {
    if (link !== null) {
    return <a href={link}><RiAmazonFill className="fill-slate-500 hover:fill-blue-700" /></a>
    }}

function FlickrLink({link}) {
    if (link !== null) {
    return <a href={link}><FaFlickr className="fill-slate-500 hover:fill-blue-700" /></a>
    }}

function Stack({stacklist}) {
    if (stacklist !== null) {
    return (
        stacklist.map(item => (
            <span key={`portSpan-${item}`} className="flex items-center rounded-full bg-teal-100/50 px-3 py-1 text-xs font-medium leading-5 text-teal-600 drop-shadow-md">
                {item}
            </span>
        ))
    )}
}
    

function CompositionItem({ title, instrumentation, stack, youtubeLink, scoreLink, audioFileLink, amazonLink, flickrLink, summary, length }) {
    
    return (
        <>
			<div className="group mb-5">
				    <div className="bg-slate-200 gap-4 sm:flex flex-row z-0 rounded-md transition">
					    <div className="m-2 mt-1 sm:basis-3/4 sm:order-2">
						    <div className="flex">
                                <h6 className="text-xl flex flex-row mb-1 font-bold italic">{`${title}`}</h6>
                                <p className="pl-1 mt-1">({length})</p>
						    </div>
                            <div className="mb-2"><p>{instrumentation}</p></div>
                            <div className="mb-2">{summary}</div>
						    <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                                <Stack stacklist = {stack} />   
                            </div>
					    </div>
                        <div className="hover:bg-gray-200/50 sm:gap-4 sm:grid sm:grid-cols-2 justify-start flex text-5xl pb-2 m-2 mt-2 sm:basis-1/4 sm:order-1">
                            <YoutubeLink link = {youtubeLink} />
                            <ScoreLink link = {scoreLink} />
                            <AudioFileLink link = {audioFileLink} />  
                            <AmazonLink link = {amazonLink} />
                            <FlickrLink link = {flickrLink} />
					    </div>
                    </div>
			</div>
        </>
    )
}

export default CompositionItem;