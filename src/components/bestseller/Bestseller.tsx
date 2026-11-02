import bestmen from '../../assets/bestseller-images/bestseller-men/bestseller-menhome.jpg'
import Footer from '../footer/Footer';
import Navbar from '../navbar/navbar'
import bestwomen from '../../assets/bestseller-images/bestseller-women/bestseller-womenhome.jpg'
import bestsmart from '../../assets/bestseller-images/bestseller-smart/bestseller-smarthome.jpg'
import Watchcard from "../../components/watchcard/Watchcard";
import bestsellMen from '../../data/bestsellMen'
import bestsellWomen from '../../data/bestsellWomen'
import bestsellSmart from '../../data/bestsellSmart';
import "../../components/bestseller/bestseller.css"
import video1 from "../../assets/videos/homevideo4.mp4"
import video2 from "../../assets/videos/homevideo3.mp4"
import video3 from "../../assets/videos/homevideo1.mp4"
import video4 from "../../assets/videos/homevideo5.mp4"
import video5 from "../../assets/videos/homevideo2.mp4"
import { useState } from 'react'

const Bestsellers = () => {

    const videos = [video1, video2, video3, video4, video5];

    const [currentVideo, setCurrentVideo] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    return (
        <>
            <Navbar />

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner carousel">
                    <div className="carousel-item active">
                        <img src={bestmen} className="d-block w-100" alt="Men Watch"></img>
                        <div className="men-text">
                            <h5 className='fs-subhead heading-font'>Time Made for Men</h5>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={bestwomen} className="d-block w-100" alt="Women Watch"></img>
                        <div className="men-text">
                            <h5 className='fs-subhead heading-font'>Classic Time, Modern Style</h5>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={bestsmart} className="d-block w-100" alt="Smart Watch"></img>
                        <div className="men-text">
                            <h5 className='fs-subhead heading-font'>Think Smart. Wear Smart.</h5>
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
            <div>
                <h1 className="pt-4 ps-4 pb-4 ms-4 heading-font">
                    Most Wanted

                </h1>
            </div>
            <div className="bestseller-card">

                {bestsellMen.map((product) => (
                    <div key={product.id}>
                        <Watchcard
                            product={product}
                        />
                    </div>
                ))}

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
                <h1 className="pt-4 ps-4 pb-4 ms-4 heading-font">
                    Featured Collection
                </h1>
            </div>
            <div className="bestseller-card">

                {bestsellWomen.map((product) => (
                    <div key={product.id}>
                        <Watchcard
                            product={product}
                        />
                    </div>
                ))}

            </div>

            <div>
                <h1 className="pt-4 ps-4 pb-4 ms-4 heading-font">
                    Trending Watches
                </h1>
            </div>
            <div className="bestseller-card">

                {bestsellSmart.map((product) => (
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

export default Bestsellers;




