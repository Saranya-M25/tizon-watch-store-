import { Link } from "react-router-dom";
import "../../components/footer/footer.css"

const Footer=()=> {
    return (
        <>
            <footer className="footer row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="logo-text me-lg-auto mb-2 justify-content-center">
                    <h4><Link className="heading-font nav-link p-5" to="/">
                        TIZON</Link>
                    </h4>
                </div>
                <div className="col mb-3"></div>
                <div className="col mb-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to='/watches' className="nav-link p-0 text-white">Watches</Link></li>
                        <li className="nav-item mb-2"><Link to='/bestseller' className="nav-link p-0 text-white">Bestseller</Link></li>
                        <li className="nav-item mb-2"><Link to='/about' className="nav-link p-0 text-white">About</Link></li>
                        <li className="nav-item mb-2"><Link to='/contact' className="nav-link p-0 text-white">FAQ</Link></li>

                    </ul>
                </div>
                <div className="col mb-3">
                    <h5>Collections</h5>
                    <ul className="nav flex-column text-white">
                        <li className="nav-item  mb-2"><Link to='/men' className="nav-link p-0 text-white">Men</Link></li>
                        <li className="nav-item mb-2"><Link to='/women' className="nav-link p-0 text-white">Women</Link></li>
                        <li className="nav-item mb-2"><Link to='/smart' className="nav-link p-0 text-white">Smart</Link></li>
                    </ul>
                </div>
                <div className="col mb-3">
                    <h5>Contact Us</h5>
                    <ul className="nav text-white flex-column">
                        <li className="nav-item mb-2"><a href="" className="nav-link p-0 text-white">
                            📞	Phone
                            +91 90522 67334
                        </a></li>
                        <li className="nav-item mb-2"><a href="" className="nav-link p-0 text-white">📧 tizonwatches@gmail.com
                        </a></li>
                        <li className="nav-item mb-2"><a href="" className="nav-link p-0 text-white">📍 Chennai, TamilNadu
                        </a></li>

                    </ul>
                    <div className="pt-4">
                        <h5> Follow Us</h5>
                        <div className="social-icons">
                            <a href=""><i className="bi bi-whatsapp"></i></a>
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-youtube"></i></a>
                            <a href=""><i className="bi bi-facebook"></i></a>
                            <a href=""><i className="bi bi-messenger"></i></a>
                        </div>
                    </div>

                </div>

            </footer>

        </>
    );
}
export default Footer