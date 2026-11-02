import menWatches from '../../data/menWatches'
import Footer from '../footer/Footer';
import display1 from '../../assets/mens-images/display1.jpg'
import display2 from '../../assets/mens-images/display2.jpg'
import Watchcard from "../../components/watchcard/Watchcard";
import Navbar from '../navbar/navbar';


const Men = () => {

  return (
    <>
      <Navbar />
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner carousel">
          <div className="carousel-item active">
            <img src={display1} className="d-block w-100 display" alt="menwatch"></img>
            <div className="men-text">
              <h5 className='fs-subhead heading-font'>Your Personality, Your Watch</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={display2} className="d-block w-100" alt="menwatch"></img>
            <div className="men-text">
              <h5 className='fs-subhead heading-font'>Every Moment Deserves a Perfect Watch</h5>
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
      <div className='text-center pt-5 '>
        <h1 className='pt-3 pb-4 heading-font'>Men's World</h1>
        <div className=" mencard">

          {menWatches.map((product) => (
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
export default Men