import React from 'react';
import compositionsElectronic from '../data/compositionsElectronic';
import compositionsAcoustic from '../data/compositionsAcoustic';
import compositionsInstallation from '../data/compositionsInstallation';
import CompositionItem from './CompositionItem';

function Compositions() {
    return (
        <>
            <div className="mt-12">
            <a id="portfolio" className="relative invisible scroll-mt-14"></a>
            <div className="flex justify-center">
                <h2 className="font-monospace uppercase">compositions</h2>
            </div>

            <div className="group/list px-3 py-2">
		        <div className="container mx-auto sm:px-4">
                    <h3 className="sm:text-3xl text-2xl font-bold uppercase mx-auto py-5">Electronic</h3>
                    {compositionsElectronic.map(project => (
                        <CompositionItem
                            keyz={project.idb}
                            title={project.title}
                            instrumentation={project.instrumentation}
                            stack={project.stack}
                            youtubeLink={project.youtubeLink}
                            scoreLink={project.scoreLink}
                            audioFileLink={project.audioFileLink}
                            amazonLink={project.amazonLink}
                            flickrLink={project.flickrLink}
                            summary={project.summary}
                            length={project.length}
                        />
                    ))}
                </div>
            </div>

            <div className="group/list px-3 py-2"> 
		        <div className="container mx-auto sm:px-4">
                    <h3 className="sm:text-3xl text-2xl font-bold uppercase mx-auto py-5">Acoustic</h3>
                    {compositionsAcoustic.map(project => (
                        <CompositionItem
                            keyz={project.idb}
                            title={project.title}
                            instrumentation={project.instrumentation}
                            stack={project.stack}
                            youtubeLink={project.youtubeLink}
                            scoreLink={project.scoreLink}
                            audioFileLink={project.audioFileLink}
                            amazonLink={project.amazonLink}
                            flickrLink={project.flickrLink}
                            summary={project.summary}
                            length={project.length}
                        />
                    ))}
                </div>
            </div>

            <div className="group/list px-3 py-2"> 
		        <div className="container mx-auto sm:px-4">
                    <h3 className="sm:text-3xl text-2xl font-bold uppercase mx-auto py-5">Installation</h3>
                    {compositionsInstallation.map(project => (
                        <CompositionItem
                            keyz={project.idb}
                            title={project.title}
                            instrumentation={project.instrumentation}
                            stack={project.stack}
                            youtubeLink={project.youtubeLink}
                            scoreLink={project.scoreLink}
                            audioFileLink={project.audioFileLink}
                            amazonLink={project.amazonLink}
                            flickrLink={project.flickrLink}
                            summary={project.summary}
                            length={project.length}
                        />
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}

export default Compositions;
