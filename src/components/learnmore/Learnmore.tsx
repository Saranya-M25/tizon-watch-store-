import { useLocation } from "react-router-dom";
import type { Product } from "../../data/product";
import "../../components/learnmore/learnmore.css"
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import Watchcard from "../watchcard/Watchcard";
import topSeller from "../../data/topSeller";


const Learnmore = () => {
  const location = useLocation();

  const navigate = useNavigate();


  const handleBuyNow = (product: Product) => {
    navigate("/cart", { state: { product } });
  };

  const product = location.state?.product as Product | undefined;

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <div className="p-5">
        <div className="learnmore-card text-secondary row align-items-center">

          {/* Product Image */}
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded-5 p-3"
            />
          </div>

          {/* Product Details */}
          <div className=" col-md-5">
            <h1>{product.name}</h1>

            <p className="fw-bold">
              MRP: ₹{product.price}<br></br>inclusive of all taxes
            </p>
            <p>{product.description}</p>
            {/* <div className="heart">♡</div> */}
            <div className='pb-4 rate'>⭐⭐⭐⭐   {product.rating}</div>
            <div className="d-flex">
              <button
                className="confirm-order-btn"
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </button>

              <button
                className="back-button"
                onClick={() => navigate(-1)}
              >
                Back
              </button>

            </div>
          </div>

        </div>
      </div>
      <div className=" mencard">

        {topSeller.map((product) => (
          <div key={product.id}>
            <Watchcard
              product={product}
            />
          </div>
        ))}

      </div>

      <Footer />
    </>
  );
};

export default Learnmore;