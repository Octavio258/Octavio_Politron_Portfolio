import React, { useState} from "react";
import Project from '../components/Project';

function Portfolio() {
    const[projects] = useState([
        {
            name: 'The Scroll Down',
            photo: 'the_scroll_down.JPG',
            link: 'https://the-scroll-down.herokuapp.com',
            github: 'https://github.com/Octavio258/the_scroll_down'
        },
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