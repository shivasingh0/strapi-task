import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaWifi, FaBed } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";

const Card = () => {
  const [data, setData] = useState([]);

  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  ];

  useEffect(()=>{
    const getProducts = async() => {
      try {
        let response = await axios.get("http://localhost:1337/api/hotels");
        let result = await response;
        setData(result.data.data);
        console.log(result.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts()
  },[])

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {data.map((hotel, index) => (
              <div
                key={index}
                className="group relative border rounded-xl"
              >
                <div className="aspect-h-1/2 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-44">
                  <img
                    src={data.imageSrc}
                    alt={data.imageAlt}
                    className="h-full w-full lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 px-4 flex justify-between aspect-h-1/2">
                  <div>
                    <h4 href={data.href}>{hotel.attributes.name}</h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {data.color}
                    </p>
                  </div>
                  <h4 className="font-medium text-gray-900">₹{hotel.attributes.price}/-</h4>
                </div>
                <div className="flex px-4 justify-between align-center">
                  <p className="flex gap-1">
                    <AiOutlineCheckCircle /> Payment Verifyed
                  </p>
                  <div className="flex gap-2">
                    {
                      hotel.attributes.wifi === true ? <FaWifi /> : ""
                    }
                    {
                      hotel.attributes.tv === true ? <MdOutlineMonitor /> : ""
                    }
                    {
                      hotel.attributes.furniture === true ? <FaBed /> : ""
                    }  
                  </div>
                </div>
                <div className="mt-4 mb-4 px-4">
                  <hr />
                  <button
                    className="align-middle w-full select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
