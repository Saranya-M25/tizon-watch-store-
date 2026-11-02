import featureWatch3 from '../../assets/feature-images/featured-watch3.jpg'
import featureWatch4 from '../../assets/feature-images/featured-watch4.jpg'
import featureWatch5 from '../../assets/feature-images/featured-watch5.jpg'
import featureWatch6 from '../../assets/feature-images/featured-watch6.jpg'
import Footer from '../footer/Footer'
import Navbar from '../navbar/navbar'


const Features=()=> {
  return (
    <>
      <Navbar />
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner carousel">
          <div className="carousel-item active">
            <img src={featureWatch3} className="d-block w-100" alt="featureWatch"></img>
            <div className="carousel-text">
              <h5 className='fs-subhead heading-font'>Elegant and Timeless Design</h5>
              <p>The Reddy watch features an elegant and timeless design, characterized by clean lines, minimalistic dials, and a sophisticated aesthetic.</p>
            </div>

          </div>
          <div className="carousel-item">
            <img src={featureWatch4} className="d-block w-100" alt="featureWatch"></img>
            <div className="carousel-text">
              <h5 className='fs-subhead heading-font'>Water-Resistance</h5>
              <p>Designed with wearer comfort in mind, the Reddy watch offers a comfortable fit on the wrist, making it suitable for prolonged wear.</p>
            </div>

          </div>
          <div className="carousel-item">
            <img src={featureWatch5} className="d-block w-100" alt="featureWatch"></img>
            <div className="carousel-text">
              <h5 className='fs-subhead heading-font'>Comfortable Fit</h5>
              <p>The Reddy watch features an elegant and timeless design, characterized by clean lines, minimalistic dials, and a sophisticated aesthetic.</p>
            </div>

          </div>
          <div className="carousel-item">
            <img src={featureWatch6} className="d-block w-100" alt="featureWatch"></img>
            <div className="carousel-text">
              <h5 className='fs-subhead heading-font'>Interchangeable Straps</h5>
              <p>Customize your Reddy watch to match your personal style and mood. The watch comes with interchangeable straps, allowing you to switch.</p>
            </div>

          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Features