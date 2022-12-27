import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Homebtn from "../img/homebtn.png";
import Shelterbtn from "../img/shelterbtn.png";
import Flag from "../img/caflag.png";
import Phone from "../img/phone.png";
import Chat from "../img/chat.png";
import Fb from "../img/fb.png";
import Ig from "../img/ig.png";
import Tw from "../img/tw.png";
import Linkedin from "../img/linkedin.png";
import Larrow from "../img/Larrow.png";
import Banner from "../img/Hbanner.png";
import Img1 from "../img/img1.png";
import X from "../img/x.png";
import Plus from "../img/plus.png";
import Polygon from "../img/polygon.png";
import Polygonwhite from "../img/polygonwhite.png";
import BgPolygon from "../img/bgPolygon.png";
import PolygonHv from "../img/polygonhv.png";
import Tick from "../img/tick.png";
import CR1 from "../img/CR1.png";
import CR1B1 from "../img/carousel/carousel1B1.png";
import CR1B2 from "../img/carousel/carousel1B2.png";
import CR1B3 from "../img/carousel/carousel1B3.png";
import CR2 from "../img/carousel/Carousel2.png";
import CR2B1 from "../img/carousel/carousel2B1.png";
import CR2B2 from "../img/carousel/carousel2B2.png";
import CR2B3 from "../img/carousel/carousel2B3.png";
import CR3 from "../img/carousel/Carousel3.png";
import CR3B1 from "../img/carousel/carousel3B1.png";
import CR3B2 from "../img/carousel/carousel3B2.png";
import CR3B3 from "../img/carousel/carousel3B3.png";
import Prev from "../img/carousel/prev.png";
import Next from "../img/carousel/next.png";
const Home = () => {
  const [R1, setR1] = useState(false);
  const [R2, setR2] = useState(false);
  const [R3, setR3] = useState(false);
  const [R4, setR4] = useState(false);

  const [Pg, setPg] = useState(false);

  const [carousel1, setcarousel] = useState(1);
  const [carousel2, setcarouse2] = useState(1);
  const [carousel3, setcarouse3] = useState(1);

  const [P1, setP1] = useState(true);
  const [P2, setP2] = useState(false);
  const [P3, setP3] = useState(false);
  const [P4, setP4] = useState(false);

const [Q1, setQ1] = useState(1)
const [Q2, setQ2] = useState(1)
const [Q3, setQ3] = useState(1)

  return (
    <>
      <header>
        <nav className="h-[12.2rem] w-[164rem] m-auto flex justify-between items-center">
          <ul className="flex w-[52.2rem] justify-between">
            <li>
              <a href="" className="text-[1.8rem] font-[500] leading-[3.2rem] ">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-[1.8rem] font-[500] leading-[3.2rem]">
                Shelters
              </a>
            </li>
            <li>
              <a href="" className="text-[1.8rem] font-[500] leading-[3.2rem]">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="text-[1.8rem] font-[500] leading-[3.2rem]">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-[1.8rem] font-[500] leading-[3.2rem]">
                Contacts
              </a>
            </li>
          </ul>
          <div className="flex">
            <button
              className="mr-[.5rem] w-[25.9rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img src={Homebtn} className="mr-[1rem]" alt="" />
              DESIGN YOUR SHELTER
            </button>
            <button
              className="mr-[2rem] w-[31.2rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(270deg, #000000 0%, #5A5A5A 50.01%, #000000 100%)",
                boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img src={Shelterbtn} className="mr-[1rem]" alt="" />
              BROWSE SHELTERS IN STOCK
            </button>
            <button>
              <img src={Flag} alt="" />
            </button>
          </div>
        </nav>
      </header>

      {/* HERO SECTION------------------- */}
      <section>
        {/* --------TOP----------- */}
        <div
          className="h-[7.9rem] flex justify-center items-center"
          style={{
            background:
              "linear-gradient(270deg, #000000 0%, #5A5A5A 50.01%, #000000 100%)",
          }}
        >
          <div className="w-[164rem] m-auto flex justify-between items-center relative">
            <div className="flex">
              <button
                className="w-[19.7rem] h-[5rem] rounded-[.6rem] text-[2rem] leading-[2.8rem] font-[500] text-white flex justify-center items-center mr-[2rem]"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                }}
              >
                <img src={Phone} alt="" className="mr-[.8rem]" /> 123 456 789
              </button>
              <button
                className="w-[19.7rem] h-[5rem] rounded-[.6rem] text-[2rem] leading-[2.8rem] font-[500] text-white flex justify-center items-center bg-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                }}
              >
                <div
                  className="w-[19.3rem] h-[4.6rem]  rounded-[.6rem] flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(270deg, #000000 0%, #5A5A5A 50.01%, #000000 100%)",
                  }}
                >
                  <img src={Chat} alt="" className="mr-[.8rem]" /> Live Chat
                </div>
              </button>
            </div>

            <p className="text-[2rem] font-[500] leading-[2.8erm] text-white absolute left-[54.1rem]">
              For pricing information we can provide better service by email
            </p>

            <div className="w-[18rem] flex justify-between items-center">
              <img src={Fb} alt="" />
              <img src={Linkedin} alt="" />
              <img src={Ig} alt="" />
              <img src={Tw} alt="" />
            </div>
          </div>
        </div>

        {/* MAIN------- */}
        <div className="bg-[#F9F3E9] pt-[16.9rem] pb-[18.5rem]">
          <div className="w-[164rem] m-auto flex justify-between items-center">
            <div>
              <p className="font-[500] text-[2.6rem] leading-[3.5rem]">
                Proudly Serving British Columbia Since 2017
              </p>
              <div className="font-[700] text-[6rem] leading-[7rem] w-[73.9rem] mt-[2rem] mb-[3rem]">
                The Easiest{" "}
                <span className="text-[#7D3E1C] "> Structures </span>
                To Use In The World’s Most Difficult Conditions
              </div>
              <p className="font-[500] leading-[3.6rem] text-[2.4rem] text-[#454545] w-[68.1rem]">
                Alpine Structures provides its customers with only high quality
                durable steel and PVC Faberic Shelters
              </p>
              <button
                className="w-[21.2rem] h-[5rem] rounded-[.6rem] text-[2rem] leading-[2.8rem] mt-[3rem] font-[500] text-white flex justify-center items-center mr-[2rem]"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                }}
              >
                Discover More <img src={Larrow} alt="" className="ml-[1rem]" />
              </button>
            </div>
            <img src={Banner} alt="" />
          </div>
        </div>

        <div
          className="h-[20.9rem] flex justify-center items-center"
          style={{
            background:
              "linear-gradient(270deg, #000000 0%, #5A5A5A 50.01%, #000000 100%)",
          }}
        >
          <div className="w-[164rem] m-auto flex justify-between items-center ">
            <p className="text-[4rem] font-[700] leading-[6erm] text-white">
              MILLION Square Feet Sold! Contact Us Today
            </p>
            <div className="flex">
              <button
                className="mr-[2rem] w-[25.9rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                  boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img src={Homebtn} className="mr-[1rem]" alt="" />
                DESIGN YOUR SHELTER
              </button>
              <button
                className="mr-[2rem] w-[31.2rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(270deg, #000000 0%, #5A5A5A 50.01%, #000000 100%)",
                  boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img src={Shelterbtn} className="mr-[1rem]" alt="" />
                BROWSE SHELTERS IN STOCK
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2----------------- */}
      <section className="bg-[#F9F3E9]">
        <div className="w-[164rem] flex justify-between items-center m-auto pt-[10rem] ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[4rem] leading-[6rem] font-[700] mb-[5.6rem]">
              20’W X 30’L X 12’H Storage Shelter Tent
            </h1>
            <img src={Img1} alt="" />
          </div>
          <div>
            <div>
              {/* ----ACCORDIANS----- */}
              <div
                class=" w-[57.8rem]  cursor-pointer"
                onClick={() => setR1(!R1)}
              >
                <div class="top">
                  <h2 className=" pb-[1.5rem] flex justify-start items-center font-[700] text-[3rem] leading-[6rem]  border-b-2 border-[#7D3E1C]">
                    {" "}
                    <img
                      src={R1 ? X : Plus}
                      className="mr-[1.2rem]"
                      alt=""
                    />{" "}
                    Exterior
                  </h2>
                </div>
                <div
                  className="pb-[6.1rem] flex flex-col"
                  style={R1 ? { display: "flex" } : { display: "none" }}
                >
                  <h1 className="font-[700] text-[3rem] leading-[6rem]">
                    Color
                  </h1>
                  <div className="flex">
                    <div>
                      <p className="font-[700] text-[1.6rem] leading-[1.8rem]">
                        White
                      </p>
                      <div className="bg-white border-2 border-[#7D3E1C] rounded-[.6rem] mt-[.5rem] w-[7.7rem] h-[7.9rem]"></div>
                    </div>
                    <div className="ml-[3.4rem]">
                      <p className="font-[700] text-[1.6rem] leading-[1.8rem]">
                        Black
                      </p>
                      <div className="bg-black  rounded-[.6rem] mt-[.5rem] w-[7.7rem] h-[7.9rem]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class=" w-[57.8rem] mt-[1.2rem] cursor-pointer"
                onClick={() => setR2(!R2)}
              >
                <div class="top">
                  <h2 className=" pb-[1.5rem] flex justify-start items-center font-[700] text-[3rem] leading-[6rem]  border-b-2 border-[#7D3E1C]">
                    {" "}
                    <img
                      src={R2 ? X : Plus}
                      className="mr-[1.2rem]"
                      alt=""
                    />{" "}
                    Interios
                  </h2>
                </div>
                <div
                  className="pb-[6.1rem] flex flex-col"
                  style={R2 ? { display: "flex" } : { display: "none" }}
                >
                  <h1 className="font-[700] text-[3rem] leading-[6rem]">
                    Color
                  </h1>
                  <div className="flex">
                    <div>
                      <p className="font-[700] text-[1.6rem] leading-[1.8rem]">
                        White
                      </p>
                      <div className="bg-white border-2 border-[#7D3E1C] rounded-[.6rem] mt-[.5rem] w-[7.7rem] h-[7.9rem]"></div>
                    </div>
                    <div className="ml-[3.4rem]">
                      <p className="font-[700] text-[1.6rem] leading-[1.8rem]">
                        Black
                      </p>
                      <div className="bg-black  rounded-[.6rem] mt-[.5rem] w-[7.7rem] h-[7.9rem]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class=" w-[57.8rem] mt-[1.2rem] cursor-pointer"
                onClick={() => setR3(!R3)}
              >
                <div class="top">
                  <h2 className=" pb-[1.5rem] flex justify-start items-center font-[700] text-[3rem] leading-[6rem]  border-b-2 border-[#7D3E1C]">
                    {" "}
                    <img
                      src={R3 ? X : Plus}
                      className="mr-[1.2rem]"
                      alt=""
                    />{" "}
                    Accessories
                  </h2>
                </div>
                <div
                  className="pb-[6.1rem] flex flex-col"
                  style={R3 ? { display: "flex" } : { display: "none" }}
                >
                  <h1 className="font-[700] text-[3rem] leading-[6rem]">
                    Color
                  </h1>
                  <div className="flex">
                    <div>
                      <p className="font-[700] text-[1.6rem] leading-[1.8rem]">
                        White
                      </p>
                      <div className="bg-white border-2 border-[#7D3E1C] rounded-[.6rem] mt-[.5rem] w-[7.7rem] h-[7.9rem]"></div>
                    </div>
                    <div className="ml-[3.4rem]">
                      <p className="font-[700] text-[1.6rem] leading-[1.8rem]">
                        Black
                      </p>
                      <div className="bg-black  rounded-[.6rem] mt-[.5rem] w-[7.7rem] h-[7.9rem]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class=" w-[57.8rem]  mt-[1.2rem] cursor-pointer"
                onClick={() => setR4(!R4)}
              >
                <div class="top">
                  <h2 className="pb-[1.5rem] flex justify-start items-center font-[700] text-[3rem] leading-[6rem]  border-b-2 border-[#7D3E1C]">
                    {" "}
                    <img
                      src={R4 ? X : Plus}
                      className="mr-[1.2rem]"
                      alt=""
                    />{" "}
                    Packaging
                  </h2>
                  <h3>{R1 ? "-" : "+"}</h3>
                </div>
                <div
                  className="pb-[6.1rem] flex flex-col"
                  style={R4 ? { display: "flex" } : { display: "none" }}
                >
                  <h1 className="font-[700] text-[3rem] leading-[6rem]">
                    Color
                  </h1>
                  <div className="flex">
                    <div>
                      <p className="font-[700] text-[1.6rem] leading-[1.8rem]">
                        White
                      </p>
                      <div className="bg-white border-2 border-[#7D3E1C] rounded-[.6rem] mt-[.5rem] w-[7.7rem] h-[7.9rem]"></div>
                    </div>
                    <div className="ml-[3.4rem]">
                      <p className="font-[700] text-[1.6rem] leading-[1.8rem]">
                        Black
                      </p>
                      <div className="bg-black  rounded-[.6rem] mt-[.5rem] w-[7.7rem] h-[7.9rem]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[100%] justify-between items-center mt-[3.5rem]">
              <h1 className="font-[700] text-[4rem] leading-[6rem]">
                {" "}
                $9,499.05 CAD
              </h1>
              <button
                className="w-[18.8rem] h-[5rem] rounded-[.6rem] text-[2rem] leading-[2.8rem] font-[500] text-white flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                }}
              >
                Place Order <img src={Larrow} alt="" className="ml-[1rem]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION3  */}
      <section className="bg-[#F9F3E9] pt-[22.1rem] relative">
        <h1 className="leading-[6rem] text-[6rem] font-[700] m-auto text-center">
          Get Started with <span className="text-[#7D3E1C]">3</span> Easy Steps
        </h1>
        <div
          className="w-[63.9rem] h-[63.9rem] absolute left-[-18.2rem]"
          style={{ background: `url(${BgPolygon})`, backgroundSize: "cover" }}
        ></div>
        <div className="flex mt-[8.8rem] justify-center items-center pb-[15.7rem] ">
          <div
            className="cursor-pointer"
            onClick={() => {
              setPg(!Pg);
            }}
          >
            <div
              className={` w-[41.4rem] h-[41.4rem] pl-[6.7rem] justify-center items-start flex-col ${
                Pg ? "hidden" : "flex"
              }`}
              style={{
                backgroundImage: `url(${Polygon}`,
                backgroundSize: "cover",
              }}
            >
              <p className="font-[700] text-[6rem]  leading-[7rem] text-white">
                01
              </p>
              <p className="font-[700] text-[2.4rem] leading-[3.2rem] text-white ">
                Select Product
              </p>
              <p className="font-[500] text-[1.6rem] leading-[2.8rem] w-[29.2rem] text-white">
                Lorem ipsum dolor sit amet, consectetur adi piscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissi
                metus nec fringil la accumsan.
              </p>
            </div>
            <div
              className={` w-[41.4rem]  h-[41.4rem] pl-[6.7rem] flex justify-center items-start flex-col  ${
                Pg ? "flex" : "hidden"
              }`}
              style={{
                backgroundImage: `url(${PolygonHv}`,
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col">
                <button
                  className="mr-[.5rem] w-[29.8rem] h-[4rem] rounded-[.6rem] text-[1.6rem] mb-[2.4rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                    boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Select product from stock
                </button>
                <button className="mr-[2rem] w-[29.8rem] h-[4rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-black flex justify-center items-center bg-white border-2 border-[#3E120A]">
                  Customize your products
                </button>
              </div>
            </div>
          </div>

          <div
            className=" w-[41.4rem] h-[41.4rem] pl-[6.7rem] flex justify-center items-start flex-col"
            style={{
              backgroundImage: `url(${Polygonwhite}`,
              backgroundSize: "cover",
            }}
          >
            <p className="font-[700] text-[6rem]  leading-[7rem] text-[#666568]">
              02
            </p>
            <p className="font-[700] text-[2.4rem] leading-[3.2rem] text-black mt-[.2rem] mb-[.67rem] ">
              Select Product
            </p>
            <p className="font-[500] text-[1.6rem] leading-[2.8rem] w-[29.2rem] text-[#454545]">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissi metus
              nec fringil la accumsan.
            </p>
          </div>
          <div
            className=" w-[41.4rem] h-[41.4rem] pl-[6.7rem] flex justify-center items-start flex-col "
            style={{
              backgroundImage: `url(${Polygonwhite}`,
              backgroundSize: "cover",
            }}
          >
            <p className="font-[700] text-[6rem]  leading-[7rem] text-[#666568]">
              03
            </p>
            <p className="font-[700] text-[2.4rem] leading-[3.2rem] text-black mt-[.2rem] mb-[.67rem] mx-[12.2rem] ">
              Select Product
            </p>
            <p className="font-[500] text-[1.6rem] leading-[2.8rem] w-[29.2rem] text-[#454545]">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissi metus
              nec fringil la accumsan.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4  */}
      <section className="bg-[#F9F3E9]">
        <h1 className="leading-[6rem] text-[6rem] font-[700] m-auto text-center">
          Our Most <span className="text-[#7D3E1C]">Popular</span> Shelters
        </h1>

        <div className="mt-[12.3rem]">
          <div className="flex flex-row-reverse justify-between w-[164rem] m-auto">
            {/* SIDE DETAILS  */}
            <div className=" w-[77.4rem] ">
            <h1 className="font-[700] text-[4rem] leading-[6rem] w-[100%] border-b-2 border-[#7D3E1C] mb-[4.8rem] text-[#131313]">Single Tube (Peak)</h1>
              <div className="top bg-[rgba(102,101,104,0.08)] flex">
                <button
                  onClick={() => {
                    setP1(true);
                    setP2(false);
                    setP3(false);
                    setP4(false);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P1
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => {
                    setP1(false);
                    setP2(true);
                    setP3(false);
                    setP4(false);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P2
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    setP1(false);
                    setP2(false);
                    setP3(true);
                    setP4(false);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P3
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => {
                    setP1(false);
                    setP2(false);
                    setP3(false);
                    setP4(true);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P4
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Reviews
                </button>
              </div>
              <div className="pl-[3rem] bottom bg-white">
                <div className={`panel flex-col ${P1 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
                <div className={`panel flex-col ${P2 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
                <div className={`panel flex-col ${P3 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
                <div className={`panel flex-col ${P4 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* CAROUSEL  */}
            <div className="w-[81rem] relative mb-[13.5rem]">
              <div className="bg-white w-[100%] h-[61.4rem] flex justify-center items-center border-2 border-[#7D3E1C]">
                <img
                  src={CR1}
                  alt=""
                  className={`${carousel1 == 1 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR1}
                  alt=""
                  className={`${carousel1 == 2 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR1}
                  alt=""
                  className={`${carousel1 == 3 ? "flex" : "hidden"}`}
                />
              </div>
              <div className="bottom absolute top-[54.8rem] left-[7.8rem]">
                <div className="flex w-[65.4rem] justify-between m-auto">
                  <div
                    className={`flex justify-center items-center w-[20.2rem] h-[13.1rem] cursor-pointer bg-white ${
                      carousel1 == 1 ? "border-2 border-[#7D3E1C]" : "border-0"
                    }`}
                    style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
                    onClick={() => {
                      setcarousel(1);
                    }}
                  >
                    <img src={CR1B1} alt="" />
                  </div>
                  <div
                    className={`flex justify-center items-center w-[20.2rem] h-[13.1rem] cursor-pointer bg-white ${
                      carousel1 == 2 ? "border-2 border-[#7D3E1C]" : "border-0"
                    }`}
                    style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
                    onClick={() => {
                      setcarousel(2);
                    }}
                  >
                    <img src={CR1B2} alt="" />
                  </div>
                  <div
                    className={`flex justify-center items-center w-[20.2rem] h-[13.1rem] cursor-pointer bg-white ${
                      carousel1 == 3 ? "border-2 border-[#7D3E1C]" : "border-0"
                    }`}
                    style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
                    onClick={() => {
                      setcarousel(3);
                    }}
                  >
                    <img src={CR1B3} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-[77rem] m-auto absolute top-[59.6rem] left-[2rem]">
                <img
                  src={Prev}
                  alt=""
                  className="w-[3.4rem] h-[3.4rem] cursor-pointer"
                  onClick={() => {
                    if (carousel1 == 1) {
                      return;
                    } else {
                      setcarousel(carousel1 - 1);
                    }
                  }}
                />
                <img
                  src={Next}
                  alt=""
                  className="w-[3.4rem] h-[3.4rem] cursor-pointer"
                  onClick={() => {
                    if (carousel1 == 3) {
                      return;
                    } else {
                      setcarousel(carousel1 + 1);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" w-[164rem] h-[13rem] flex justify-between items-center bg-white px-[8.4rem] m-auto" style={{boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)"}}>
            <p className="font-[900] text-[4.86rem] leading-[9.72rem]">$9,499.05 CAD</p>
            <div className="flex justify-center items-center" >
           <p className="font-[500] text-[2rem] leading-[2.8rem] mr-[3rem]">Quantity:</p>
            <div className="mr-[2.4rem] w-[14.6rem] h-[5rem] rounded-[.6rem] text-black font-[700] text-[2.4rem] leading-[3.2] flex justify-center items-center border-2 border-[#7D3E1C]">
            <button className="text-black" onClick={()=>{setQ1(Q1-1)}}>-</button>
            <span className="text-black font-[700] text-[2.4rem] leading-[3.2] mx-[3rem]">{Q1}</span>
            <button className="text-black" onClick={()=>{setQ1(Q1+1)}}>+</button>
            </div>
            <button
              className="mr-[.5rem] w-[18rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
              }}
            >
              Order Now
              <img src={Larrow} className="mr-[1rem]" alt="" />
            </button>
          </div>
          </div>
        </div>
        <div className="mt-[14rem]">
          <div className="flex flex-row justify-between w-[164rem] m-auto">
            {/* SIDE DETAILS  */}
            <div className=" w-[77.4rem] ">
            <h1 className="font-[700] text-[4rem] leading-[6rem] w-[100%] border-b-2 border-[#7D3E1C] mb-[4.8rem] text-[#131313]">Dual Truss</h1>
              <div className="top bg-[rgba(102,101,104,0.08)] flex">
                <button
                  onClick={() => {
                    setP1(true);
                    setP2(false);
                    setP3(false);
                    setP4(false);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P1
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => {
                    setP1(false);
                    setP2(true);
                    setP3(false);
                    setP4(false);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P2
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    setP1(false);
                    setP2(false);
                    setP3(true);
                    setP4(false);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P3
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => {
                    setP1(false);
                    setP2(false);
                    setP3(false);
                    setP4(true);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P4
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Reviews
                </button>
              </div>
              <div className="pl-[3rem] bottom bg-white">
                <div className={`panel flex-col ${P1 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
                <div className={`panel flex-col ${P2 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
                <div className={`panel flex-col ${P3 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
                <div className={`panel flex-col ${P4 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* CAROUSEL  */}
            <div className="w-[81rem] relative mb-[13.5rem]">
              <div className="bg-white w-[100%] h-[61.4rem] flex justify-center items-center border-2 border-[#7D3E1C]">
                <img
                  src={CR2}
                  alt=""
                  className={`${carousel1 == 1 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR2}
                  alt=""
                  className={`${carousel1 == 2 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR2}
                  alt=""
                  className={`${carousel1 == 3 ? "flex" : "hidden"}`}
                />
              </div>
              <div className="bottom absolute top-[54.8rem] left-[7.8rem]">
                <div className="flex w-[65.4rem] justify-between m-auto">
                  <div
                    className={`flex justify-center items-center w-[20.2rem] h-[13.1rem] cursor-pointer bg-white ${
                      carousel1 == 1 ? "border-2 border-[#7D3E1C]" : "border-0"
                    }`}
                    style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
                    onClick={() => {
                      setcarousel(1);
                    }}
                  >
                    <img src={CR2B1} alt="" />
                  </div>
                  <div
                    className={`flex justify-center items-center w-[20.2rem] h-[13.1rem] cursor-pointer bg-white ${
                      carousel1 == 2 ? "border-2 border-[#7D3E1C]" : "border-0"
                    }`}
                    style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
                    onClick={() => {
                      setcarousel(2);
                    }}
                  >
                    <img src={CR2B2} alt="" />
                  </div>
                  <div
                    className={`flex justify-center items-center w-[20.2rem] h-[13.1rem] cursor-pointer bg-white ${
                      carousel1 == 3 ? "border-2 border-[#7D3E1C]" : "border-0"
                    }`}
                    style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
                    onClick={() => {
                      setcarousel(3);
                    }}
                  >
                    <img src={CR2B3} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-[77rem] m-auto absolute top-[59.6rem] left-[2rem]">
                <img
                  src={Prev}
                  alt=""
                  className="w-[3.4rem] h-[3.4rem] cursor-pointer"
                  onClick={() => {
                    if (carousel1 == 1) {
                      return;
                    } else {
                      setcarousel(carousel1 - 1);
                    }
                  }}
                />
                <img
                  src={Next}
                  alt=""
                  className="w-[3.4rem] h-[3.4rem] cursor-pointer"
                  onClick={() => {
                    if (carousel1 == 3) {
                      return;
                    } else {
                      setcarousel(carousel1 + 1);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" w-[164rem] h-[13rem] flex justify-between items-center bg-white px-[8.4rem] m-auto" style={{boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)"}}>
            <p className="font-[900] text-[4.86rem] leading-[9.72rem]">$9,499.05 CAD</p>
            <div className="flex justify-center items-center" >
           <p className="font-[500] text-[2rem] leading-[2.8rem] mr-[3rem]">Quantity:</p>
            <div className="mr-[2.4rem] w-[14.6rem] h-[5rem] rounded-[.6rem] text-black font-[700] text-[2.4rem] leading-[3.2] flex justify-center items-center border-2 border-[#7D3E1C]">
            <button className="text-black" onClick={()=>{setQ2(Q2-1)}}>-</button>
            <span className="text-black font-[700] text-[2.4rem] leading-[3.2] mx-[3rem]">{Q2}</span>
            <button className="text-black" onClick={()=>{setQ2(Q2+1)}}>+</button>
            </div>
            <button
              className="mr-[.5rem] w-[18rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
              }}
            >
              Order Now
              <img src={Larrow} className="mr-[1rem]" alt="" />
            </button>
          </div>
          </div>
        </div>
        <div className="mt-[12.3rem]">
          <div className="flex flex-row-reverse justify-between w-[164rem] m-auto">
            {/* SIDE DETAILS  */}
            <div className=" w-[77.4rem] ">
            <h1 className="font-[700] text-[4rem] leading-[6rem] w-[100%] border-b-2 border-[#7D3E1C] mb-[4.8rem] text-[#131313]">Container Mounted</h1>
              <div className="top bg-[rgba(102,101,104,0.08)] flex">
                <button
                  onClick={() => {
                    setP1(true);
                    setP2(false);
                    setP3(false);
                    setP4(false);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P1
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => {
                    setP1(false);
                    setP2(true);
                    setP3(false);
                    setP4(false);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P2
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    setP1(false);
                    setP2(false);
                    setP3(true);
                    setP4(false);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P3
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => {
                    setP1(false);
                    setP2(false);
                    setP3(false);
                    setP4(true);
                  }}
                  className={`w-[19.3rem]   font-[500] text-[2rem]   leading-[2.8rem] h-[5.5rem] ${
                    P4
                      ? " border-2 border-[#7D3E1C] rounded-[.8rem] text-[#454545] bg-white"
                      : "border-0 text-[#666568] rounded-none bg-transparent"
                  }`}
                >
                  Reviews
                </button>
              </div>
              <div className="pl-[3rem] bottom bg-white">
                <div className={`panel flex-col ${P1 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
                <div className={`panel flex-col ${P2 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
                <div className={`panel flex-col ${P3 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
                <div className={`panel flex-col ${P4 ? "flex" : "hidden"}`}>
                  <div className="mb-[2.5rem] mt-[4.1rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" />
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* CAROUSEL  */}
            <div className="w-[81rem] relative mb-[13.5rem]">
              <div className="bg-white w-[100%] h-[61.4rem] flex justify-center items-center border-2 border-[#7D3E1C]">
                <img
                  src={CR3}
                  alt=""
                  className={`${carousel1 == 1 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR3}
                  alt=""
                  className={`${carousel1 == 2 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR3}
                  alt=""
                  className={`${carousel1 == 3 ? "flex" : "hidden"}`}
                />
              </div>
              <div className="bottom absolute top-[54.8rem] left-[7.8rem]">
                <div className="flex w-[65.4rem] justify-between m-auto">
                  <div
                    className={`flex justify-center items-center w-[20.2rem] h-[13.1rem] cursor-pointer bg-white ${
                      carousel1 == 1 ? "border-2 border-[#7D3E1C]" : "border-0"
                    }`}
                    style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
                    onClick={() => {
                      setcarousel(1);
                    }}
                  >
                    <img src={CR3B1} alt="" />
                  </div>
                  <div
                    className={`flex justify-center items-center w-[20.2rem] h-[13.1rem] cursor-pointer bg-white ${
                      carousel1 == 2 ? "border-2 border-[#7D3E1C]" : "border-0"
                    }`}
                    style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
                    onClick={() => {
                      setcarousel(2);
                    }}
                  >
                    <img src={CR3B2} alt="" />
                  </div>
                  <div
                    className={`flex justify-center items-center w-[20.2rem] h-[13.1rem] cursor-pointer bg-white ${
                      carousel1 == 3 ? "border-2 border-[#7D3E1C]" : "border-0"
                    }`}
                    style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
                    onClick={() => {
                      setcarousel(3);
                    }}
                  >
                    <img src={CR3B3} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-[77rem] m-auto absolute top-[59.6rem] left-[2rem]">
                <img
                  src={Prev}
                  alt=""
                  className="w-[3.4rem] h-[3.4rem] cursor-pointer"
                  onClick={() => {
                    if (carousel1 == 1) {
                      return;
                    } else {
                      setcarousel(carousel1 - 1);
                    }
                  }}
                />
                <img
                  src={Next}
                  alt=""
                  className="w-[3.4rem] h-[3.4rem] cursor-pointer"
                  onClick={() => {
                    if (carousel1 == 3) {
                      return;
                    } else {
                      setcarousel(carousel1 + 1);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" w-[164rem] h-[13rem] flex justify-between items-center bg-white px-[8.4rem] m-auto" style={{boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)"}}>
            <p className="font-[900] text-[4.86rem] leading-[9.72rem]">$9,499.05 CAD</p>
            <div className="flex justify-center items-center" >
           <p className="font-[500] text-[2rem] leading-[2.8rem] mr-[3rem]">Quantity:</p>
            <div className="mr-[2.4rem] w-[14.6rem] h-[5rem] rounded-[.6rem] text-black font-[700] text-[2.4rem] leading-[3.2] flex justify-center items-center border-2 border-[#7D3E1C]">
            <button className="text-black" onClick={()=>{setQ3(Q3-1)}}>-</button>
            <span className="text-black font-[700] text-[2.4rem] leading-[3.2] mx-[3rem]">{Q3}</span>
            <button className="text-black" onClick={()=>{setQ3(Q3+1)}}>+</button>
            </div>
            <button
              className="mr-[.5rem] w-[18rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
              }}
            >
              Order Now
              <img src={Larrow} className="mr-[1rem]" alt="" />
            </button>
          </div>
          </div>
        </div>
      </section>


      {/* SECTION5  */}
      <section className="pt-[14rem] bg-[#F9F3E9]"> 
         <div
          className="h-[20.9rem] flex justify-center items-center "
          style={{
            background:
              "linear-gradient(270deg, #000000 0%, #5A5A5A 50.01%, #000000 100%)",
          }}
        >
          <div className="w-[164rem] m-auto flex justify-between items-center ">
            <div>
<p className="text-[2.4rem] font-[500] leading-[2.4rem] text-white mb-[1.4rem]">Have Any Ideas In Your Mind?</p>
            <p className="text-[4rem] font-[700] leading-[6rem] text-white">
            Let’s Talk About Your Next Project Right Now
            </p>
            
            </div>
            <div className="flex">
              <button
                className="mr-[2rem] w-[19.7rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                  boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img src={Phone} className="mr-[1rem]" alt="" />
                123 456 789
              </button>
              <button
                className="mr-[2rem] w-[16.5rem] border-2 border-[#7D3E1C] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center">
                <img src={Chat} className="mr-[1rem]" alt="" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col justify-between bg-[#262626] text-[1.4rem] leading-[1.8rem] text-white h-[42.6rem] pt-[6rem]">
        <div className="flex">
          <div className="ml-[3.4rem]">
            <p className=" w-[14.2rem]">My Account</p>
          </div>
          <div className="ml-[40.8rem]">
            <p className="mb-[1rem] w-[14.2rem]">Locations</p>
            <p className="mb-[1rem] w-[14.2rem]">Services</p>
            <p className="mb-[1rem] w-[14.2rem]">Virtual care</p>
            <p className="mb-[1rem] w-[14.2rem]">Wellness Plans</p>
          </div>
          <div className="ml-[13.3rem]">
            <p className="mb-[1rem] w-[14.2rem]">Join our Team</p>
            <p className="mb-[1rem] w-[14.2rem]">Partner with Us</p>
            <p className="mb-[1rem] w-[14.2rem]">Associate Vets</p>
            <p className="mb-[1rem] w-[14.2rem]">New Grads</p>
            <p className="mb-[1rem] w-[14.2rem]">Technicians & Staff</p>
          </div>
          <div className="ml-[13.3rem]">
            <p className="mb-[1rem] w-[14.2rem]">Careers</p>
            <p className="mb-[1rem] w-[14.2rem]">Journal</p>
            <p className="mb-[1rem] w-[14.2rem]">FAQ</p>
            <p className="mb-[1rem] w-[14.2rem]">Press</p>
          </div>
        </div>
        <div className="flex py-[1.9rem] border-t border-white">
          <p className="ml-[3.4rem] w-[14.2rem]">©2022 GOODVETS</p>
          <p className="ml-[40.8rem] w-[14.2rem]">Terms & Legal</p>
          <p className="ml-[13.3rem] w-[14.2rem]">Privacy Policy</p>
          <div className="flex space-x-[2rem] ml-[13.3rem] ">
            <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
            <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
            <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
            <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
