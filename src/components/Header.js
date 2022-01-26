import React from "react";
import Navigation from '../components/Navigation';

function Header(props) {
    const {
        setCurrentChoice
    } = props;

    return (
        <header className='flex-row px-1'>
            <h2>
                <a data-testid='link' href="/">
                    Octavio Politron
                </a>
                <Navigation
                setCurrentChoice={setCurrentChoice}
                ></Navigation>
            </h2>
        </header>
    )
}

export default Header;