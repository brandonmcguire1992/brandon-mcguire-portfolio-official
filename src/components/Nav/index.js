import React, { useEffect } from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';

function Nav(props) {
    const {
        pages=[],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <div className='hero'>Brandon McGuire
        <nav className='navbar navbar-expand-lg navbar-light fixed-top' id='mainNav'>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
                <ul className='navbar-nav ml-auto'>
                    {pages.map((Page) => (
                        <li className={`nav-item ${currentPage.name === Page.name && 'navActive'}`}
                        key={Page.name}
                        >
                            <span onClick={() => setCurrentPage(Page)}>
                                {capitalizeFirstLetter(Page.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
        </div>
    );
}

export default Nav;