import homecarousel1 from '../../assets/home-images/home-carousel1.jpg'
import homecarousel2 from '../../assets/home-images/home-carousel2.jpg'
import homecarousel3 from '../../assets/home-images/home-carousel3.jpg'
import menCategory from '../../assets/mens-images/men-homewatch.jpg'
import womenCategory from '../../assets/womens-images/women-homewatch.jpg'
import smartCategory from '../../assets/smart-images/smart-homewatch.jpg'
import { Link } from 'react-router-dom'
import Watchcard from '../watchcard/Watchcard'
import newArrival from '../../data/newArrival'
import { useNavigate } from 'react-router-dom'
import "../../components/hero/hero.css"
import video1 from "../../assets/videos/homevideo1.mp4"
import video2 from "../../assets/videos/homevideo2.mp4"
import video3 from "../../assets/videos/homevideo3.mp4"
import video4 from "../../assets/videos/homevideo4.mp4"
import video5 from "../../assets/videos/homevideo5.mp4"
import { useState } from 'react'



const Hero=()=> {

    const navigate = useNavigate();

    const videos = [video1, video2, video3, video4, video5];

    const [currentVideo, setCurrentVideo] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner carousel">
                    <div className="carousel-item active">
                        <img src={homecarousel2} className="d-block w-100" alt="groupofwatches"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={homecarousel1} className="d-block w-100" alt="groupofwatches"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={homecarousel3} className="d-block w-100" alt="groupofwatches"></img>
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
            <div className='container text-center p-5'>
                <h1 className='fs-subtitle'>Discover luxury watch collections for everyone</h1>
            </div>
            <div className='categ '><Link to='/men'>
                <div className='card ' style={{ width: "26rem" }}>
                    <img src={menCategory} alt='menwatch'></img>
                    <p className='text-center pt-2 fs-5 text-secondary' >Men's Collection</p>
                    <div className='text-center pb-3'>
                        <button className='explore-btn '>Explore</button>
                    </div>

                </div></Link>
                <Link to='/women'>
                    <div className='card ' style={{ width: "26rem" }}>
                        <img src={womenCategory} alt='womenwatch'></img>
                        <p className='text-center pt-2 fs-5 text-secondary' >Women's Collection</p>
                        <div className='text-center pb-3'>
                            <button className='explore-btn '>Explore</button>
                        </div>

                    </div></Link>
                <Link to='/smart'>
                    <div className='card' style={{ width: "26rem" }}>
                        <img src={smartCategory} alt='smartwatch'></img>
                        <p className='text-center pt-2 fs-5 text-secondary' >Smart Collection</p>
                        <div className='text-center pb-3'>
                            <button className='explore-btn '>Explore</button>
                        </div>

                    </div></Link>

            </div>
            <div className="video-container">
                <video
                    key={currentVideo}
                    autoPlay
                    muted
                    playsInline
                    className="home-video"
                    onEnded={handleVideoEnd}
                >
                    <source src={videos[currentVideo]} type="video/mp4" />
                </video>

            </div>
            <div>
                <h1 className="heading-font pt-4 ps-4 pb-4 ms-4">
                    New Arrivals
                </h1>
            </div>

            <div className=" mencard">

                {newArrival.map((product) => (
                    <div key={product.id}>
                        <Watchcard
                            product={product}
                        />
                    </div>
                ))}

            </div>
            <div className='container text-center p-5'>
                <h1 className='fs-subtitle'>Every watch has a story.
                </h1>
            </div>

            <div className="bgimg-1 bgimg">
                <div className="parallax-content-right">
                    <h1>Superior Craftsmanship
                    </h1>
                    <p className='fs-body'>
                        Each Reddy watch is meticulously crafted with precision and attention to detail, reflecting the artistry of expert watchmakers.
                    </p>
                    <div className='pb-3'>
                        <button onClick={() => navigate("/bestseller")} className=' parallax-content-rightbtn'>Shop Now</button>
                    </div>

                </div>
            </div>
            <div className="bgimg-2 bgimg">

                <div className=" parallax-content-left">
                    <h1>Attention to Detail  </h1>
                    <p>
                        Every aspect of the Reddy watch showcases meticulous attention to detail, from the finely engraved logo to the perfectly proportioned.          </p>
                    <div className='pb-3'>
                        <button onClick={() => navigate("/bestseller")} className=' parallax-content-rightbtn'>Shop Now</button>
                    </div>
                </div>

            </div>
            <section className="tw-cb-section">
                <div className="p-5 tw-cb-section__container d-flex text-center justify-content-around">
                    <div className="tw-cb-section__item">
                        <img
                            alt="Gurantee Icon"
                            className="img-fluid"
                            src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc17b5cd2/images/homepage/Gurantee.svg"
                        />
                        <p className="mb-0 mt-2">100% ORIGINAL</p>
                    </div>
                    <div className="tw-cb-section__item">
                        <img
                            alt=" Return Icon "
                            className="img-fluid"
                            src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0987d956/images/homepage/Return.svg "
                        />
                        <p className="mb-0 mt-2">7 DAY RETURN</p>
                    </div>
                    <div className="tw-cb-section__item">
                        <img
                            alt="Shipping Icon"
                            className="img-fluid"
                            src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw824f2669/images/homepage/Shipping.svg "
                        />
                        <p className="mb-0 mt-2">FREE SHIPPING</p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero