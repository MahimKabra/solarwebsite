import React from 'react';
import "../Css/Header.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Header() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-sm-between" id="topbar">
                <div className="col-sm-5 d-flex justify-content-sm-evenly">
                    <p className="d-inline-block mb-0 py-2 topbar-text">
                        <LocationOnIcon className="me-sm-1" />
                        Serving the state of Florida
                    </p>
                    <p className="d-inline-block mb-0 py-2 topbar-text">
                        <EmailIcon className="me-sm-1" />
                        info@gofloridasolarpanels.com
                    </p>
                    <p className="d-inline-block mb-0 py-2 topbar-text">
                        <CallIcon className="me-sm-1" />
                        24/7 Customer Support
                    </p>
                </div>
                <div className="col-sm-2 text-white d-flex justify-content-center align-items-center" id="topbar-icons">
                    <FacebookIcon className="bg-dark rounded-circle p-1" style={{ fontSize: '30px', margin: '0px 5px' }} />
                    <TwitterIcon className="bg-dark rounded-circle p-1" style={{ fontSize: '30px', margin: '0px 5px' }} />
                    <InstagramIcon className="bg-dark rounded-circle p-1" style={{ fontSize: '30px', margin: '0px 5px' }} />
                    <YouTubeIcon className="bg-dark rounded-circle p-1" style={{ fontSize: '30px', margin: '0px 5px' }} />
                </div>
            </div>
            <div className="row justify-content-sm-between" id="navbar">
                <div className="col-sm-1" id="navbar-logo">
                    <img src="images/logo.jpeg" alt="logo" className="img-fluid ms-sm-3 mt-sm-1" />
                </div>
                <div className="col-sm-9 d-flex">
                    <nav className="navbar navbar-expand-lg w-100">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav w-100 justify-content-sm-evenly">

                                <NavbarLinks name="HOME" TO="/" />
                                <NavbarLinks name="ABOUT" TO="/" />
                                <li className="nav-item dropdown cursor-pointer">
                                    <a className="nav-link dropdown-toggle text-black" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SERVICES
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <NavbarLinks name="FINANCING" TO="/" />
                                <NavbarLinks name="BLOG" TO="/" />
                                <NavbarLinks name="LOCATIONS" TO="/" />
                                <button type="button" class="btn btn-secondary navbar-btn">CONTACT US</button>
                                <button type="button" class="btn btn-secondary navbar-btn">SCHEDULE CALL</button>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

const NavbarLinks = (props) => {
    return (
        <>
            <li className="nav-item cursor-pointer">
                <a className="nav-link text-black" href={props.to}>{props.name}</a>
            </li>
        </>
    );
}

export default Header;
