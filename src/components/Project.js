
import React from "react";

function Project(props) {
    const { currentProject } = props;
    return (
        <div>
            <img
                src={require(`../assets/${currentProject.photo}`)}
                alt={currentProject.name}
                className="mx-1"
            />
            <h2>{`${currentProject.name}`}</h2>
            <a href={`${currentProject.link}`}>Link to deployed application.</a>
            <a href={`${currentProject.github}`}>Link to github repository.</a>
        </div>
    )
}

export default Project;