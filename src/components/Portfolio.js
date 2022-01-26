import React, { useState} from "react";
import Project from '../components/Project';

function Portfolio() {
    const[projects] = useState([
        {
            name: '',
            photo: '',
            link: '',
            github: ''
        }
    ])

    return (
        <section id="portfolio">
            <div className="flex-row">
                {projects.map((project) => (
                    <Project key={project.name} currentProject = {project}></Project>
                ))}

                
            </div>
        </section>
    )
}

export default Portfolio;