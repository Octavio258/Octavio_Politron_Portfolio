import React from "react";

function Navigation(props) {
    const {
        setCurrentChoice,
    } = props;

    return (

        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => setCurrentChoice('about')}>
                        About me
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio" onClick={() => setCurrentChoice('portfolio')}>
                        Portfolio
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#contact" onClick={() => setCurrentChoice('contact')}>
                        Contact
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#resume" onClick={() => setCurrentChoice('resume')}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}



export default Navigation;