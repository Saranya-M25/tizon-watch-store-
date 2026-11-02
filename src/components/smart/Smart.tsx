import smartWatches from "../../data/smartWatches";
import Watchcard from "../../components/watchcard/Watchcard";
import bestsmart from '../../assets/bestseller-images/bestseller-smart/bestseller-smarthome.jpg'
import bestsmart1 from '../../assets/bestseller-images/bestseller-smart/bestseller-smarthome1.jpg'


import Footer from "../footer/Footer";
import Navbar from "../navbar/navbar";

const Smart = () => {


  return (
    <>
      <Navbar />
      <div className='text-center'>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner carousel">
            <div className="carousel-item active">
              <img src={bestsmart} className="d-block w-100 display" alt="smartwatch"></img>
              <div className="men-text">
                <h5 className='fs-subhead heading-font'>Stay Smart, Stay Connected</h5>
              </div>

            </div>
            <div className="carousel-item">
              <img src={bestsmart1} className="d-block w-100" alt="smartwatch"></img>
              <div className="men-text">
                <h5 className='fs-subhead heading-font'>Smart Features, Stylish Looks</h5>
              </div>

            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h1 className='heading-font pt-5'>Smart World</h1>

        <div className=" mencard pt-5">

          {smartWatches.map((product) => (
            <div key={product.id}>
              <Watchcard
                product={product}

              />
            </div>
          ))}

        </div>
      </div>

      <Footer />

    </>
  );
}
export default Smart