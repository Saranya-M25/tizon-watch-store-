import womenWatches from '../../data/womenWatches'
import Footer from '../footer/Footer';
import offer1 from '../../assets/womens-images/offer1.jpg'
import offer2 from '../../assets/womens-images/offer2.jpg'
import offer3 from '../../assets/womens-images/offer3.jpg'
import offer4 from '../../assets/womens-images/offer4.jpg'
import offer5 from '../../assets/womens-images/offer5.jpg'
import offer6 from '../../assets/womens-images/offer6.jpg'
import Watchcard from "../../components/watchcard/Watchcard";
import Navbar from '../navbar/navbar';
import "../../components/women/women.css"

const Women = () => {


  return (
    <>
      <Navbar />
      <div className='bg-color mb-5 rounded'>
        <h1 className='text-center text-white pt-4'>Special Offer for You</h1>

        <div className="offer-alert">

          <span className="running-text">Buy With Amazing Bracelet🎊</span>
        </div>
        <div className="offer-card">
          <div><img src={offer1} alt='watch' />
          </div>
          <div><img src={offer2} alt='watch' /></div>
          <div><img src={offer3} alt='watch' /></div>
          <div><img src={offer4} alt='watch' /></div>
          <div><img src={offer5} alt='watch' /></div>
          <div><img src={offer6} alt='watch' /></div>

        </div>
      </div>

      <div className='text-center'>
        <h1 className='heading-font pt-3 pb-5'>Women's World</h1>

        <div className=" mencard">

          {womenWatches.map((product) => (
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
export default Women