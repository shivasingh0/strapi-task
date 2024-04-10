import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineMonitor } from 'react-icons/md';
import { FaBed, FaPhoneAlt, FaWifi } from 'react-icons/fa';
import { IoLocation } from "react-icons/io5";

const HotelDetails = () => {

  const { id } = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let response = await axios.get(`https://balanced-ball-aa2137bd18.strapiapp.com/api/hotels/${id}`);
        let result = await response;
        setData(result.data.data);
        console.log(result.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts()
  }, [])

  return (
    <section className="core">
      <section className="">
        <section className="gallery">
          <div className="image">
            <img
              src={data?.attributes?.thumbnale}
              alt="product-1"
            />
          </div>
          <div className="thumbnails">
            <div className="img-holder">
              <div className="outlay false" />
              <img
                src={data?.attributes?.img_1}
                alt="product-1"
              />
            </div>
            <div className="img-holder">
              <div className="outlay false" />
              <img
                src={data?.attributes?.img_2}
                alt="product-2"
              />
            </div>
            <div className="img-holder">
              <div className="outlay false" />
              <img
                src={data?.attributes?.img_3}
                alt="product-3"
              />
            </div>
            <div className="img-holder">
              <div className="outlay false" />
              <img
                src={data?.attributes?.img_4}
                alt="product-4"
              />
            </div>
          </div>
        </section>
      </section>
      <section className="description">
        <h1>{data?.attributes?.name}</h1>
        <p className="pre">{data?.attributes?.city}</p>
        <p className="desc">
          {data?.attributes?.description}
        </p>
        <div className="price">
          <div className="main-tag">
            <p>₹{data?.attributes?.price}</p>
            <p className="flex gap-1">
              <AiOutlineCheckCircle className='mt-1' /> Payment Verifyed
            </p>
            <p className="flex gap-1">
            {data?.attributes?.size}
            </p>
          </div>
        </div>
        <div className="buttons">
          <div className="flex gap-5">
            {
              data?.attributes?.wifi === true ? <FaWifi className='text-6xl' /> : ""
            }
            {
              data?.attributes?.tv === true ? <MdOutlineMonitor className='text-6xl' /> : ""
            }
            {
              data?.attributes?.furniture === true ? <FaBed className='text-6xl' /> : ""
            }
          </div>
        </div>
        <div className="flex gap-2">
        <IoLocation className='text-2xl' /> <span className='font-bold'>{data?.attributes?.city},{data?.attributes?.address}</span>
        </div>
        <div className="flex gap-2">
        <FaPhoneAlt className='text-2xl' /> <span className='font-bold'>+91-{data?.attributes?.mobile}</span>
        </div>
    </section>
    </section >
  )
}

export default HotelDetails
