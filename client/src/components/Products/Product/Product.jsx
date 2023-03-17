import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";
import ReactPlayer from 'react-player';
import { Player } from 'video-react';

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div

            className="product-card"
            // onClick={() => navigate("/product/" + id)}
        >
            <div className="">



                {/* <ReactPlayer class="playeradjust" url={process.env.REACT_APP_STRIPE_APP_DEV_URL + data.link}
                    controls /> */}
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src="https://demo16032023.s3.us-west-2.amazonaws.com/A%20classic%20fit%20Xiaomi%20Watch%20S1%20Pro.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCmFwLXNvdXRoLTEiSDBGAiEA8qK7N69MEShS1Gg9mqr7H0ZeUI%2Bkn6PBrP8zFGFX5q8CIQCN1YQ1Qp6iJCE3arW6e6AY9Yejr8%2FbwI6q9rdKwiEmvCqBAwgUEAEaDDc2MDM3MDYzOTEzMyIMOHm70C3sJwZkQtKYKt4CZGDdNd59vlZMPDL4d7nhClTUYVy5MU6Lp8YTIcjAeJdR8zhUUeubOA7ffK1rmo6tFeeNK3LwzpZYk%2FsXzSFtF4CjCs8DBuQsOvNlEFlCh6rI2jwrUGXVgmrH9cCdGDVdyvPkyutmFqFDMxxTGdOVlGEKw2ezOLlWYaAmbKxSn7DA7ph2bIBEJ%2FYG%2Fev9pOCen5KtxR%2F9WSxRJQGfT2ICufH8U%2BhzwYmuAPs7J8ixxf%2FdnEZchKsSEBQEuB6ZawNhQ9OyDjgQYegMuh%2B2xQ72R%2B0%2FaoNdsMOUz59S5ub455qnoz%2BBpA2lDWRpRltQkirZ%2FNdYHF5d%2FcjesmWfWyXgWPq3YgDxOghVX0giNW%2B2lcG3dFEqaJtHUOHFr%2FFEvbmK%2F4nMcdUfnMQ1Jfa0Bqwwu7ldhBBm7b7olXxQCKu30yGcbT96sIEeClqKHW%2B0%2Bx9Q1edb33uRV21yDAbIbnMwn8%2FLoAY6sgL%2BIR04TL9r1tz42DG2yUT2SdZH0neKHOAQ5C%2FyF7mHbMIgYJ7JpWvM3740%2FOQdrlA1oXB%2BXIl1%2BgVNEZ7tr2PDPcxRv7bGls3M3jBfSDaepfMisqk%2FuZMDwtvHUwR8cr2tsK7WLUR43XO8eTbI8aJYAjlRqAr0TdIa4fyR1iGTLczKFdRTsLJs9M9GQiTfwS4vWHClZGoSxKdrDzIqdkaPQj%2Fp2VgxaZVJWnc35SuVz3cC%2B0Wsl6Qvvx7rnPhCXM7M5Y4dP1gCf3GSszfT4r4b5K95wnR2MfUaTPsXhU44wDdUzILFcxQdhWxXycFuYNK%2BfsKi4llyJPKC2gRnZtU3ytV2BP2jBKUTOZDONTwsPZQP7deGPYmfJ8hVIfLFu3vTwk4%2BmZAUkEPiBxKFKwTF5qU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230316T121540Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Credential=ASIA3CCM7GEOXWRR24WJ%2F20230316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=3f25653cfd8290ad75a663166721b09c2df18000fcd463f04788e4c01d0efe94"
                />

            </div>
            <div className="prod-details">
                <span className="name">{data.Title}</span>
                <span className="Language">{data.Rating}</span>
            </div>
        </div>
    );
};

export default Product;


