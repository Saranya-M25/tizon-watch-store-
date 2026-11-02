import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/navbar'
import Products from '../../components/products/Products';
import  "../../pages/watches/watches.css"



const Watches=()=> {
    return (
        <>
        <Navbar/>
            <div className=" py-4  hero-img d-flex">

                <div className="col-lg-5 hero-img-text ps-5 ">


                    <h1 className=" heading-font fs-head ">Perfect Watch for Perfect People.
                    </h1>
                    <p className="fs-subtitle ">
                        Premium luxury watches crafted with style, precision, and elegance.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-secondary btn-lg px-4 me-md-2 fw-bold fs-button">Shop Now</button>
                    </div>
                </div>
            </div>
            <div >
            </div>
            <Products/>
<Footer/>
        </>
    );
}
export default Watches