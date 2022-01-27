import React from "react";

function Navigation(props) {
    const {
        setCurrentChoice,
    } = props;

    return (

        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => setCurrentChoice('About')}>
                        About me
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio" onClick={() => setCurrentChoice('Portfolio')}>
                        Portfolio
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#contact" onClick={() => setCurrentChoice('Contact')}>
                        Contact
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#resume" onClick={() => setCurrentChoice('Resume')}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}



export default Navigation;