import { useState, useEffect } from 'react';
import BlogWebsite from './projects/BlogWebsite';
import PythonGame from './projects/PythonGame';
import Salinity from './projects/Salinity';
import White_Circle from '../assets/White_Circle.svg.png';

export const Projects = () => {
    const projects = [<BlogWebsite />, <PythonGame />, <Salinity />];
    const length = projects.length;

    const [activeProject, setActiveProject] = useState(projects[0]);
    const [index, setIndex] = useState(0);

    const handleLeftClick = () => {
        const newIndex = index > 0 ? index - 1 : length - 1;
        setIndex(newIndex);
        setActiveProject(projects[newIndex]);
    }

    const handleRightClick = () => {
        const newIndex = index < length - 1 ? index + 1 : 0;
        setIndex(newIndex);
        setActiveProject(projects[newIndex]);
    }

    return (
        <section id="projects">
            <div className="projects-header" ><h1>  Projects </h1> </div>
            <div className='projects-container'>
                <div className='cardandarrow-container'>
                    <div>
                        <button onClick={handleLeftClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" class="bi bi-chevron-left" viewBox="0 0 16 16" className='arrow'>
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        {activeProject}
                    </div>
                    <div>
                        <button onClick={handleRightClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" class="bi bi-chevron-right" viewBox="0 0 16 16" className='arrow'>
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='dotbar-container'>
                    <div className="dot"> <img className={index === 0 ? 'dotOn' : 'dotOff'} src={White_Circle} alt="."></img> </div>
                    <div className="dot"> <img className={index === 1 ? 'dotOn' : 'dotOff'} src={White_Circle} alt="."></img> </div>
                    <div className="dot"> <img className={index === 2 ? 'dotOn' : 'dotOff'} src={White_Circle} alt="."></img> </div>
                </div>
            </div>
        </section>
    )
}




