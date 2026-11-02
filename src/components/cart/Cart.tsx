import { Link, useLocation, useNavigate } from "react-router-dom";
import type { Product } from "../../data/product";
import { useState } from "react";
import "../../components/cart/cart.css"
import newArrival from "../../data/newArrival";
import Watchcard from "../watchcard/Watchcard";
import Footer from "../footer/Footer";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const product = location.state?.product as Product | undefined;

  const handlePlaceOrder = () => {
    setShowPopup(true);
  };

  // EMPTY CART
  if (!product) {
    return (
      <>
        <div className="empty-cart text-center text-white">
          <div className="text-center rounded-5 gr-color2 py-5">

            <i
              className="bi bi-bag fs-subhead text-white mb-2 "

            ></i>

            <h1 className="heading-font mt-3">
              No More Items
            </h1>

            <p className="p-2 mx-5">
              Your wrist is waiting for something special.
              Discover timeless watches and choose your perfect match.          </p>

            <Link
              to="/bestseller"
              className="btn btn-light px-4 py-3"
            >
              Start Shopping
            </Link>

          </div>
        </div>
        <h1 className='fs-subtitle heading-font text-center p-4'>Time meets style. Explore our collection.</h1>
        <div className=" mencard ">

          {newArrival.map((product) => (
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
  }

  // PRODUCT IN CART
  return (
    <div>
      <div className=" text-center order-cart mt-5">

        <h2 className="text-center text-secondary mb-4">
          Order Summary
        </h2>
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid p-3"
        />
        <h5>{product.name}</h5>
        <p className="fs-price fw-bold ">₹{product.price}</p>
        <p >Quantity: 1</p>
        <p>Total Amount: ₹{product.price}</p>

        <button
          className="confirm-order-btn"
          onClick={handlePlaceOrder}
        >
          Confirm Order
        </button>

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">

            <div className="popup-icon">
              ✓
            </div>

            <h2>Order Successfully Placed!</h2>


            <button
              className="popup-button"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;