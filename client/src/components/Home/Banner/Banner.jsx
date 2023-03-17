import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Anime</h1>
                    <p>
                    Invisible, words plant their seeds, Perhaps to not mature for years.
                    The flowers can be choked by weeds,
                    From tactless slurs to whispered fears
                    That did not settle on deaf ears
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Shorts</div>
                        <div className="banner-cta v2">Watch Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
