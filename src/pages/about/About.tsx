import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/navbar";
import card1 from '../../assets/home-images/card1.jpg'
import card2 from '../../assets/home-images/card2.jpg'
import "../../pages/about/about.css"
import video1 from "../../assets/videos/watch-video1.mp4";


const About=()=> {
  return (
    <>
      <Navbar />
      <div className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={video1} type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1>Timeless Style</h1>
          <p>Discover your perfect watch.</p>
        </div>
      </div>

      <div className="about-gr-color1 m-3 p-5 rounded-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img className="d-block mx-lg-auto rounded-5 img-fluid"
              alt="Watch"
              width="500"
              loading="lazy"
              src={card1}
            />
          </div>
          <div className="col-lg-6 text-center">
            <h2 className=" mb-3 text-dark">Our Story</h2>
            <p className="fs-5 text-dark">
              Welcome to <strong>TIZON Watch Store</strong>, your trusted destination for
              premium and stylish watches. We offer a wide collection of men's,
              women's, and luxury watches from popular brands at affordable prices.
            </p>
          </div>
        </div>
      </div>

      <div className="about-gr-color1 rounded-5 col-xxl-8 p-5 slide-up-text m-3">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-2">
          <div className="col-10 col-sm-8 col-lg-6 slide-up-img">
            <img className="d-block mx-lg-auto rounded-5 img-fluid"
              alt="watch"
              width="500"
              loading="lazy"
              src={card2}
            />
          </div>
          <div className="col-lg-6 text-center">
            <h2 className=" mb-3 text-dark">Our Collection</h2>
            <p className="fs-5 text-dark">
              Explore our latest collection of analog, digital, smart, sports, and
              luxury watches designed for every occasion. Whether you are looking for a classic timepiece, a modern smart watch, or an elegant luxury watch, we have something to match every style and occasion. Our watches are carefully selected to provide excellent quality, durability, and timeless design.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            </div>
          </div>
        </div>
      </div>
      <div className="about-gr-color1 p-3 col-xxl-8 m-3 rounded-5">
        <div className="container py-3 my-3">
          <h2 className="text-center text-dark mb-4 m-auto">Why Choose Us?</h2>
          <p className="fs-5 text-dark text-center">Our mission is to provide high-quality watches that combine style, comfort, and durability while delivering an excellent shopping experience.We are committed to providing a smooth shopping experience, reliable products, and customer satisfaction. Choose <strong> TIZON</strong> Watch Store and make every moment count in style! ✨ </p>
        </div>
        <div className="choose-card">
          <ul className=" fs-5 text-black about-gr-color4">
            <li>⌚<br></br>Premium quality watches</li>
            <li>💰<br></br>Affordable prices</li>
            <li>🚚<br></br>Safe online shopping</li>
            <li>⭐<br></br>Excellent customer support</li>
          </ul>

        </div>
      </div>

      <Footer />


    </>
  );
}

export default About;