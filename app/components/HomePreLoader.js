'use client';

import Image from "next/image";
import loader from "../assets/images/preloader.gif";

// import Lottie from 'lottie-react';
// import daribLoader from '../assets/lottie/daarib-loader.json';

const HomePreLoader = () => {
    return (
        <div className="pre-loader">
            <div className="pre-loader-area">
                <div className="container">
                    <div className="relative flex items-center justify-center h-screen z-999999999999999999999999">
                        <div className="w-[280px] lg:w-auto">
                            <Image className="object-contain w-full h-full" src={loader} alt="loader" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePreLoader;
