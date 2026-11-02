
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/navbar";
import "../../pages/contact/contact.css"

const Contact=()=> {
    return (
        <>
            <Navbar />
            <div className="bg-color1">
            <div className="container">
                <div className="row">
                    <div className="contact-card fade-up col-md-5 text-start ps-5 pe-5 ">
                        <h4 className="text-secondary fw-bold">Send us a message</h4>
                        <p className="text-dark">We'd love to hear from you! If you have any questions or feedback,
                            please get in touch.
                        </p>
                        <form>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" placeholder="Enter your name" type="text" name="name" /><label
                                >Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    name="email"
                                /><label>Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="mobile"
                                    placeholder="Enter your mobile number"
                                    type="tel"
                                    name="phone"
                                /><label >Mobile Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    placeholder="Enter your address"                    ></textarea><label >Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"></textarea >
                                <label >Share Your Requirement</label>
                            </div>
                            <button className="btn btn-secondary text-white px-3  py-1 rounded-pill" type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-container col-md-5 text-start m-auto">
                        <h2 className="contact-heading"></h2>
                        <div className="contact-list">
                            <div className="contact-item">
                                <h4 className="fw-bold">Keep In Touch</h4>
                            </div>
                            <table>
                                <tr>
                                    <td><i className="bi bi-geo-alt fs-5 me-2 text-secondary" ></i></td> <td className="text-secondary fw-bold">Address</td>
                                </tr>
                                <tr>
                                    <td></td><td>1'st Street, Annanagar,<br />Chennai, Tamilnadu 600321, India</td>
                                </tr>
                                <tr>
                                    <td><i className="bi bi-telephone fs-5 me-2 text-secondary" ></i></td><td className="text-secondary fw-bold">Phone</td>
                                </tr>
                                <tr>
                                    <td></td><td>+91 90522 67334</td>
                                </tr>
                                <tr>
                                    <td><i className="bi bi-envelope fs-5 me-2 text-secondary" ></i></td><td className="text-secondary fw-bold">Email</td>
                                </tr>
                                <tr>
                                    <td></td><td>tizonwatches@gmail.com</td>
                                </tr>
                                <tr>
                                    <td><i className="bi bi-clock fs-5 me-2 text-secondary"></i></td><td className="text-secondary fw-bold">Working Hours</td>
                                </tr>
                                <tr>
                                    <td></td><td>Monday – Saturday: 9:00 AM – 9:00 PM</td>
                                </tr>
                                <tr>
                                    <td></td><td>Sunday: 10:00 AM – 9:00 PM</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 text-center text-secondary">
                <h3 className="fs-subhead">F.A.Q.</h3>
                <p className="fs-subtitle">Some of your usual queries</p>
                <div className="accordion w-50 text-center mx-auto" id="accordionExample">
                    <div className="accordion-item fs-14">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne "
                            >
                                Are your watches water-resistant?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                            <div className="accordion-body">Yes, all our watches are water-resistant up to 50 meters.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                How long is the warranty period?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                            <div className="accordion-body">
                                The warranty period is 1 year. For any warranty claims or support, our customer service team is always ready to assist you.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree">
                                Can I replace the watch strap?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes, you can replace the watch strap. We offer a variety of replacement straps in different styles and materials. You can choose a strap that matches your watch and personal style.                           </div>
                        </div>
                    </div>
                </div>
            </div>
</div>

            <Footer />
        </>
    );
}

export default Contact;