"use client"

import useDictionary from '../hooks/useDictionary';

const Banner = () => {
    const {dictionary} = useDictionary();
  return (
      <div className="banner">
          <div className="bg-purple-900 banner-area">
              <div className="container">
                  <div className="flex justify-center items-center h-[150px] lg:h-[250px]">
                      <h2 className="text-2xl font-semibold text-white md:text-4xl product-title">
                          {dictionary.Banner.shopBanner}
                      </h2>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Banner