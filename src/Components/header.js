import React from 'react';


export default function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
            <div className="container">
                <a className="navbar-brand" href="/"><strong>Дома</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">За нас</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Додади оглас</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}