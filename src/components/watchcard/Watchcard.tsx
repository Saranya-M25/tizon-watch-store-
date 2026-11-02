import type { Product } from "../../data/product";
import { useNavigate } from "react-router-dom";
import "../../components/watchcard/watchcard.css"


const Watchcard = ({ product }: { product: Product }) => {

  const navigate = useNavigate();

  const handleBuyNow = (product: Product) => {
    navigate("/cart", { state: { product } });
  };

  const handleLearnMore = (product: Product) => {
    navigate("/learnmore", { state: { product } });
  }

  return (
    <>
      <div className='mencard text-center text-secondary' >

        <div className='menproduct-card pb-4 ' style={{ width: '20rem' }} key={product.id}>
          <img src={product.image} alt={product.name}></img>
          <div className='pt-3 '>
            <h3 className='mt-3 fs-bodyhead p-1'>{product.name}</h3>
            <p className='fw-bold'>&#8377; {product.price}</p>
            <div className="d-flex gap-3 ps-4 pe-4">
              <button className='card-btn' onClick={() => handleBuyNow(product)}>Add to Cart</button>
              <button className='card-btn pro-btn-link' onClick={() => handleLearnMore(product)}>Learn More</button>
            </div>
          </div>
        </div>
      </div>


    </>

  );
};

export default Watchcard;