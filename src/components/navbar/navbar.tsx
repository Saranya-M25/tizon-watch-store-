import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import "../../components/navbar/navbar.css";

const Navbar = () => {
    return (
        <>
            {/* Top Offer Banner */}
            <div className="header-banner slide-up">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="html-slot-container">
                            <div className="content">
                                <div className="marquee-outer p-2">
                                    <div className="marquee-inner">
                                        <span className="header-promotion marquee-span">
                                            SALE is Live
                                        </span>

                                        <span className="header-promotion marquee-span">
                                            Get Flat 10% cashback upto 500 on payment via Snapmint. T&C Apply*.
                                        </span>

                                        <span className="header-promotion marquee-span">
                                            Get Upto 15% Cashback via Scratch Card on transaction via MobiKwik UPI with MOV as ₹1499/-. T&C Apply*.
                                        </span>

                                        <span className="header-promotion marquee-span">
                                            Get Upto 300 cashback via Scratch card on your transaction via MobiKwik wallet. T&C Apply*.
                                        </span>

                                        <span className="header-promotion marquee-span">
                                            Get Upto 500 Cashback via Scratch Card on transaction via MobiKwik UPI. T&C Apply*.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Navbar */}
            <header className="navbar-header p-3 --body-font fs-nav">
                <div className="container">
                    <div className="desktop-navbar d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul className="nav me-lg-auto mb-2 justify-content-center mb-md-0">

                            {/* Watches Dropdown */}
                            <li className="dropdown">
                                <Link
                                    className="dropdown-title nav-link px-2 text-dark dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    to="/watches"
                                >
                                    Watches
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/watches">
                                            Latest Release
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/feature">
                                            Features
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Collections Dropdown */}
                            <li className="dropdown">
                                <Link
                                    className="dropdown-title nav-link px-2 text-dark dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    to="/watches"
                                >
                                    Collections
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/men">
                                            Men's Collection
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/women">
                                            Women's Collection
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/smart">
                                            Smart Collection
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Bestsellers */}
                            <li>
                                <Link className="nav-link px-2 text-dark" to="/bestseller">
                                    Bestsellers
                                </Link>
                            </li>

                            {/* Our Story Dropdown */}
                            <li className="dropdown">
                                <Link
                                    className="dropdown-title nav-link px-2 text-dark dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    to="/about"
                                >
                                    Our Story
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/about">
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        {/* Desktop Logo */}
                        <div className="logo-text col-lg-auto me-lg-auto mb-2 justify-content-center">
                            <h4>
                                <Link className="logo-font nav-link px-2" to="/">
                                    TIZON
                                </Link>
                            </h4>
                        </div>

                        {/* Search */}
                        <form
                            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                            role="search"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                        </form>

                        {/* User and Cart Icons */}
                        <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <ul className="nav logo-text me-lg-auto mb-2 justify-content-center">
                                <li>
                                    <Link
                                        className="nav-link px-2 text-dark"
                                        to="/contact"
                                        aria-label="Contact"
                                    >
                                        <FontAwesomeIcon icon={faUser} />
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="nav-link px-2 text-dark"
                                        to="/cart"
                                        aria-label="Cart"
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;