import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner1.png"
import banner2 from "../../../assets/banner2.png"
import banner3 from "../../../assets/banner3.png"
const Banner = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            stopOnHover={false}
            swipeable={false}
            emulateTouch={false}>
            <img src={banner1} />
            <img src={banner2} />
            <img src={banner3} />
            <img src={banner1} />
            <img src={banner2} />
            <img src={banner3} />
            <img src={banner1} />
            <img src={banner2} />
            <img src={banner3} />
            <img src={banner1} />
            <img src={banner2} />
            <img src={banner3} />
            <img src={banner1} />
            <img src={banner2} />
            <img src={banner3} />
            <img src={banner1} />
            <img src={banner2} />
            <img src={banner3} />
        </Carousel>
    );
};

export default Banner;