import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Homebtn from "../img/homebtn.png";
import Shelterbtn from "../img/shelterbtn.png";
import Flag from "../img/caflag.png";
import Phone from "../img/phone.png";
import Chat from "../img/chat.png";
import Fb from "../img/fb.png";
import Border from "../img/border.png";
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
import PGsm from "../img/PGsm.png";
import PGsmwh from "../img/pgsmwh.png";
import Pgsm1 from "../img/pg1.png";
import Pgsm2 from "../img/pg2.png";
import Pgsm3 from "../img/pg3.png";
import Pgsm4 from "../img/pg4.png";
import Pj1 from "../img/project1.png";
import Pj2 from "../img/project2.png";
import Pj3 from "../img/project3.png";
import Pj4 from "../img/project4.png";
import Pj5 from "../img/project5.png";
import Pj6 from "../img/project6.png";
import Faqpg from "../img/faqpg.png";
import Search from "../img/search.png";
import Chatbl from "../img/chatbl.png";
import Simplepg from "../img/simplepg.png";
import Quote from "../img/quotes.png";
import Stars from "../img/stars.png";
import Client from "../img/client.png";
import Client2 from "../img/client2.png";
import Client3 from "../img/client3.png";
import Footerphone from "../img/phoneFooter.png";
import Footeremail from "../img/mailFooter.png";
import Footerloc from "../img/locFooter.png";
import Logo from "../img/logo.png";
import Fbf from "../img/fbf.png";
import Lnf from "../img/lnf.png";
import Igf from "../img/igf.png";
import Twf from "../img/twf.png";

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

  const [Q1, setQ1] = useState(1);
  const [Q2, setQ2] = useState(1);
  const [Q3, setQ3] = useState(1);


  const [faq1, setfaq1] = useState(false)
  const [faq2, setfaq2] = useState(false)
  const [faq3, setfaq3] = useState(false)
  const [faq4, setfaq4] = useState(false)
  const [faq5, setfaq5] = useState(false)
  const [faq6, setfaq6] = useState(false)
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
              <img src={Homebtn} className="mr-[1rem] w-[2.2rem] h-[2.2rem]" alt="" />
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
              <img src={Shelterbtn} className="mr-[1rem] w-[2.4rem] h-[2.4rem]" alt="" />
              BROWSE SHELTERS IN STOCK
            </button>
            <button>
              <img src={Flag} alt="" className="w-[6.9rem] h-[5rem]"/>
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
                <img src={Phone} alt="" className="mr-[.8rem] w-[2.2rem] h-[2.2rem]" /> 123 456 789
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
                  <img src={Chat} alt="" className="mr-[.8rem] w-[2.2rem] h-[2.2rem]" /> Live Chat
                </div>
              </button>
            </div>

            <p className="text-[2rem] font-[500] leading-[2.8erm] text-white absolute left-[54.1rem]">
              For pricing information we can provide better service by email
            </p>

            <div className="w-[18rem] flex justify-between items-center">
              <img src={Fb} alt="" className="w-[3rem] h-[3rem]"/>
              <img src={Linkedin} alt="" className="w-[3rem] h-[3rem]"/>
              <img src={Ig} alt="" className="w-[3rem] h-[3rem]"/>
              <img src={Tw} alt="" className="w-[3rem] h-[3rem]"/>
            </div>
          </div>
        </div>

        {/* MAIN------- */}
        <div className="bg-[#F9F3E9] pt-[16.9rem] pb-[18.5rem]">
          <div className="w-[164rem] m-auto flex justify-between items-center">
            <div>
              <p className="font-[500] text-[2.6rem] leading-[3.5rem] gradient-text">
                Proudly Serving British Columbia Since 2017
              </p>
              <div className="font-[700] text-[6rem] relative leading-[7rem] w-[73.9rem] mt-[2rem] mb-[3rem]">
                <img src={Border} className="absolute top-[6.2rem] left-[32.3rem] w-[28.6rem] h-[1.5rem]" alt="" />
                The Easiest{" "}
                <span className="gradient-text "> Structures </span>
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
                Discover More <img src={Larrow} alt="" className="ml-[1rem] w-[2.1rem] h-[.8rem]" />
              </button>
            </div>
            <img src={Banner} alt="" className="w-[64rem] h-[64rem]"/>
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
                <img src={Homebtn} className="mr-[1rem] w-[2.2rem] h-[2.2rem]" alt="" />
                DESIGN YOUR SHELTER
              </button>
              <button
                className="mr-[2rem] w-[31.2rem] border-2 border-[#7D3E1C] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
                style={{
                  background:
                    "transparent",
                  boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img src={Shelterbtn} className="mr-[1rem] w-[2.4rem] h-[2.4rem]" alt="" />
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
            <img src={Img1} alt="" className="w-[92.4rem] h-[54.9rem]"/>
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
                      className="mr-[1.2rem] w-[2.4rem] h-[2.4rem]"
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
                      className="mr-[1.2rem] w-[2.4rem] h-[2.4rem]"
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
                      className="mr-[1.2rem] w-[2.4rem] h-[2.4rem]"
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
                Place Order <img src={Larrow} alt="" className="ml-[1rem] w-[2.1rem] h-[.8rem]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION3  */}
      <section className="bg-[#F9F3E9] pt-[22.1rem] relative">
        <h1 className="leading-[6rem] text-[6rem] font-[700] m-auto text-center">
          Get Started with <span className="gradient-text">3</span> Easy Steps
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
          Our Most <span className="gradient-text">Popular</span> Shelters
        </h1>

        <div className="mt-[12.3rem]">
          <div className="flex flex-row-reverse justify-between w-[164rem] m-auto">
            {/* SIDE DETAILS  */}
            <div className=" w-[77.4rem] ">
              <h1 className="font-[700] text-[4rem] leading-[6rem] w-[100%] border-b-2 border-[#7D3E1C] mb-[4.8rem] text-[#131313]">
                Single Tube (Peak)
              </h1>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                  className={` w-[75.2rem] h-[42rem] ${carousel1 == 1 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR1}
                  alt=""
                  className={` w-[75.2rem] h-[42rem] ${carousel1 == 2 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR1}
                  alt=""
                  className={` w-[75.2rem] h-[42rem] ${carousel1 == 3 ? "flex" : "hidden"}`}
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
                    <img src={CR1B1} alt="" className="w-[16.3rem] h-[9.1rem]"/>
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
                    <img src={CR1B2} alt="" className="w-[16.3rem] h-[9.1rem]"/>
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
                    <img src={CR1B3} alt="" className="w-[16.3rem] h-[9.1rem]"/>
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
          <div
            className=" w-[164rem] h-[13rem] flex justify-between items-center bg-white px-[8.4rem] m-auto"
            style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
          >
            <p className="font-[900] text-[4.86rem] leading-[9.72rem]">
              $9,499.05 CAD
            </p>
            <div className="flex justify-center items-center">
              <p className="font-[500] text-[2rem] leading-[2.8rem] mr-[3rem]">
                Quantity:
              </p>
              <div className="mr-[2.4rem] w-[14.6rem] h-[5rem] rounded-[.6rem] text-black font-[700] text-[2.4rem] leading-[3.2] flex justify-center items-center border-2 border-[#7D3E1C]">
                <button
                  className="text-black"
                  onClick={() => {
                    setQ1(Q1 - 1);
                  }}
                >
                  -
                </button>
                <span className="text-black font-[700] text-[2.4rem] leading-[3.2] mx-[3rem]">
                  {Q1}
                </span>
                <button
                  className="text-black"
                  onClick={() => {
                    setQ1(Q1 + 1);
                  }}
                >
                  +
                </button>
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
                <img src={Larrow} className="mr-[1rem] w-[2.1rem] h-[.8rem]" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[14rem]">
          <div className="flex flex-row justify-between w-[164rem] m-auto">
            {/* SIDE DETAILS  */}
            <div className=" w-[77.4rem] ">
              <h1 className="font-[700] text-[4rem] leading-[6rem] w-[100%] border-b-2 border-[#7D3E1C] mb-[4.8rem] text-[#131313]">
                Dual Truss
              </h1>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                  className={`w-[75.2rem] h-[42rem] ${carousel1 == 1 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR2}
                  alt=""
                  className={`w-[75.2rem] h-[42rem] ${carousel1 == 2 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR2}
                  alt=""
                  className={`w-[75.2rem] h-[42rem] ${carousel1 == 3 ? "flex" : "hidden"}`}
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
                    <img src={CR2B1} alt="" className="w-[16.3rem] h-[9.1rem]"/>
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
                    <img src={CR2B2} alt="" className="w-[16.3rem] h-[9.1rem]"/>
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
                    <img src={CR2B3} alt="" className="w-[16.3rem] h-[9.1rem]"/>
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
          <div
            className=" w-[164rem] h-[13rem] flex justify-between items-center bg-white px-[8.4rem] m-auto"
            style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
          >
            <p className="font-[900] text-[4.86rem] leading-[9.72rem]">
              $9,499.05 CAD
            </p>
            <div className="flex justify-center items-center">
              <p className="font-[500] text-[2rem] leading-[2.8rem] mr-[3rem]">
                Quantity:
              </p>
              <div className="mr-[2.4rem] w-[14.6rem] h-[5rem] rounded-[.6rem] text-black font-[700] text-[2.4rem] leading-[3.2] flex justify-center items-center border-2 border-[#7D3E1C]">
                <button
                  className="text-black"
                  onClick={() => {
                    setQ2(Q2 - 1);
                  }}
                >
                  -
                </button>
                <span className="text-black font-[700] text-[2.4rem] leading-[3.2] mx-[3rem]">
                  {Q2}
                </span>
                <button
                  className="text-black"
                  onClick={() => {
                    setQ2(Q2 + 1);
                  }}
                >
                  +
                </button>
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
              <h1 className="font-[700] text-[4rem] leading-[6rem] w-[100%] border-b-2 border-[#7D3E1C] mb-[4.8rem] text-[#131313]">
                Container Mounted
              </h1>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Dimensions:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      30’ (W) x 78’6" (L)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlins on rafter:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      80 of 5 rows
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Truss tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      2.3” – 15 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Cover material:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      17 oz PVC fabric
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Roof pitch:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      6.5/12
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Door:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      {" "}
                      12’ (W) x 11’ (H)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
                    <p className="ml-[1.5rem] mr-[1.2rem] font-[500] text-[2rem]  text-[#94502B] leading-[2.8rem]">
                      Purlin tubes:
                    </p>
                    <p className="font-[500] text-[2rem]  text-[#454545] leading-[2.8rem]">
                      1.65” – 17 GA (approx.)
                    </p>
                  </div>
                  <div className="mb-[2.5rem] flex justify-start items-center">
                    <img src={Tick} alt="" className="w-[1.8rem] h-[1.8rem]"/>
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
                  className={`w-[75.2rem] h-[42rem] ${carousel1 == 1 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR3}
                  alt=""
                  className={`w-[75.2rem] h-[42rem] ${carousel1 == 2 ? "flex" : "hidden"}`}
                />
                <img
                  src={CR3}
                  alt=""
                  className={`w-[75.2rem] h-[42rem] ${carousel1 == 3 ? "flex" : "hidden"}`}
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
                    <img src={CR3B1} alt="" className="w-[16.3rem] h-[9.1rem]"/>
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
                    <img src={CR3B2} alt="" className="w-[16.3rem] h-[9.1rem]"/>
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
                    <img src={CR3B3} alt="" className="w-[16.3rem] h-[9.1rem]"/>
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
          <div
            className=" w-[164rem] h-[13rem] flex justify-between items-center bg-white px-[8.4rem] m-auto"
            style={{ boxShadow: "5px 5px 20px rgba(22, 21, 64, 0.1)" }}
          >
            <p className="font-[900] text-[4.86rem] leading-[9.72rem]">
              $9,499.05 CAD
            </p>
            <div className="flex justify-center items-center">
              <p className="font-[500] text-[2rem] leading-[2.8rem] mr-[3rem]">
                Quantity:
              </p>
              <div className="mr-[2.4rem] w-[14.6rem] h-[5rem] rounded-[.6rem] text-black font-[700] text-[2.4rem] leading-[3.2] flex justify-center items-center border-2 border-[#7D3E1C]">
                <button
                  className="text-black"
                  onClick={() => {
                    setQ3(Q3 - 1);
                  }}
                >
                  -
                </button>
                <span className="text-black font-[700] text-[2.4rem] leading-[3.2] mx-[3rem]">
                  {Q3}
                </span>
                <button
                  className="text-black"
                  onClick={() => {
                    setQ3(Q3 + 1);
                  }}
                >
                  +
                </button>
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
                <img src={Larrow} className="mr-[1rem] w-[2.1rem] h-[.8rem]" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5  */}
      <section className="pt-[14rem] bg-[#F9F3E9] ">
        <div
          className="h-[20.9rem] flex justify-center items-center "
          style={{
            background:
              "linear-gradient(270deg, #000000 0%, #5A5A5A 50.01%, #000000 100%)",
          }}
        >
          <div className="w-[164rem] m-auto flex justify-between items-center ">
            <div>
              <p className="text-[2.4rem] font-[500] leading-[2.4rem] text-white mb-[1.4rem]">
                Have Any Ideas In Your Mind?
              </p>
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
                <img src={Phone} className="mr-[1rem] w-[2.2rem] h-[2.2rem]" alt="" />
                123 456 789
              </button>
              <button className="mr-[2rem] w-[16.5rem] border-2 border-[#7D3E1C] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center">
                <img src={Chat} className="mr-[1rem] w-[2.2rem] h-[2.2rem]" alt="" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6  */}
      <section className="bg-[#F9F3E9] flex flex-col justify-center items-center pt-[18.4rem]" style={{background: "linear-gradient(180deg, #F9F3E9 4.16%, rgba(219, 175, 150, 0.458333) 48.84%, #F9F3E9 93.53%)"}}>
        <h1 className="leading-[6rem] text-[6rem] font-[700] m-auto text-center">
          Why <span className="gradient-text">Choose</span> Us
        </h1>
        <div
          className="w-[63.9rem] h-[63.9rem] absolute left-[-18.2rem]"
          style={{ background: `url(${BgPolygon})`, backgroundSize: "cover" }}
        ></div>
        <div className="flex w-[139.8rem] justify-center m-auto mt-[8.8rem] mb-[6.4rem]">
          <div
            className="w-[33rem] h-[33rem] flex flex-col justify-center items-center"
            style={{ background: `url(${PGsm})`, backgroundSize: "cover" }}
          >
            <img src={Pgsm1} alt="" className="w-[4.4rem] h-[4.4rem]"/>
            <p className="font-[700] text-[1.9rem] leading-[2.2rem] text-white mt-[2rem] mb-[1.2rem]">
              Pre-Drilled Frame{" "}
            </p>
            <p className="font-[500] text-[1.26rem] leading-[2.2rem] w-[21.5rem] text-white text-center">
              Corrosion resistant galvanized steel pre-drilled frame is strong
              and easy to assemble.
            </p>
          </div>
          <div
            className="w-[33rem] h-[33rem] flex flex-col justify-center items-center"
            style={{ background: `url(${PGsmwh})`, backgroundSize: "cover" }}
          >
            <img src={Pgsm2} alt="" className="w-[5.7rem] h-[4.4rem]"/>
            <p className="font-[700] text-[1.9rem] leading-[2.2rem]  mt-[2rem] mb-[1.2rem]">
              Pre-Drilled Frame{" "}
            </p>
            <p className="font-[500] text-[1.26rem] leading-[2.2rem] w-[21.5rem] text-center">
              Corrosion resistant galvanized steel pre-drilled frame is strong
              and easy to assemble.
            </p>
          </div>
          <div
            className="w-[33rem] h-[33rem] flex flex-col justify-center items-center"
            style={{ background: `url(${PGsmwh})`, backgroundSize: "cover" }}
          >
            <img src={Pgsm3} alt="" className="w-[4.3rem] h-[4.4rem]"/>
            <p className="font-[700] text-[1.9rem] leading-[2.2rem]  mt-[2rem] mb-[1.2rem]">
            Double-Zipper Door
            </p>
            <p className="font-[500] text-[1.26rem] leading-[2.2rem] w-[21.5rem] text-center">
            Double-zipper door panels for easy entry and added reinforcement. High-strength steel cable anchors with 1,200 lb. 
            </p>
          </div>
          <div
            className="w-[33rem] h-[33rem] flex flex-col justify-center items-center"
            style={{ background: `url(${PGsmwh})`, backgroundSize: "cover" }}
          >
            <img src={Pgsm4} alt="" className="w-[4.8rem] h-[4.3rem]"/>
            <p className="font-[700] text-[1.9rem] leading-[2.2rem]  mt-[2rem] mb-[1.2rem]">
            Convenient Warehouse
            </p>
            <p className="font-[500] text-[1.26rem] leading-[2.2rem] w-[21.5rem] text-center">
            Double-Zipper Door
Double-zipper door panels for easy entry and added reinforcement. High-strength steel cable anchors with 1,200 lb.
            </p>
          </div>
        </div>
        <button
                className="mb-[11.5rem] mr-[.5rem] w-[21.2rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                  boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
                }}
              >
               Discover More
                <img src={Larrow} className="ml-[1rem] w-[2.1rem] h-[.8rem]" alt="" />
              </button>
      </section>


      {/* SECTION 7  */}
 
      <section className="flex flex-col justify-center items-center bg-[#F9F3E9] pt-[8rem]">
      <h1 className="leading-[6rem] text-[6rem] font-[700] m-auto text-center ">
      Our   <span className="gradient-text">Recent</span> Projects
        </h1>
        <div className="flex w-[140.1rem] justify-center items-center mt-[11.3rem]">
          <img src={Pj1} alt="" className="w-[33.5rem] h-[25rem]"/>
          <img src={Pj2} alt="" className="ml-[1.7rem] mr-[3.1rem] w-[68.6rem] h-[25rem]"/>
          <img src={Pj3} alt="" className="w-[33.5rem] h-[25rem]"/>
        </div>
        <div className="flex w-[140.1rem] justify-center items-center mt-[1.7rem] mb-[7.6rem]">
          <img src={Pj4} alt="" className="w-[33.5rem] h-[25rem]"/>
          <img src={Pj5} alt="" className="ml-[1.7rem] mr-[3.1rem] w-[68.6rem] h-[25rem]"/>
          <img src={Pj6} alt="" className="w-[33.5rem] h-[25rem]"/>
        </div>

        <button
                className="mb-[14rem] mr-[.5rem] w-[23.3rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                  boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
                }}
              >
         View All Projects
                <img src={Larrow} className="ml-[1rem]" alt="" />
              </button>
      </section>


      {/* SECTION 8  */}
      <section className="bg-[#F9F3E9]">
      <h1 className="leading-[6rem] text-[6rem] font-[700] m-auto text-center ">
      How We Can <span className="gradient-text">Help</span> You?
        </h1>

        <div className="flex w-[164rem] justify-between items-start  m-auto mt-[8.8rem]" >
{/* DIV1  */}
<div className="mt-[11.8rem] flex justify-center items-center flex-col">
<h1 className="leading-[5.6rem] text-[5.6rem] font-[700] m-auto text-center mb-[2.8rem] relative">
<img src={Border} className="absolute left-[47.8rem] bottom-[-1.5rem] w-[24.7rem] h-[1.5rem]" alt="" />

Frequently Asked <span className="gradient-text">Questions</span>
        </h1>

        <div>
              {/* ----ACCORDIANS----- */}
              <div
                class={`w-[74.7rem] rounded-[.46rem] mb-[1.8rem] cursor-pointer border-[1px] border-[#7D3E1C] ${faq1 ? "h-[auto]" : "h-[4.6rem]"}`}
                onClick={() => setfaq1(!faq1)}>
                <div class="top ">
                 
                  <h2 className=" pb-[1.5rem] pt-[1.6rem] font-[700] text-[1.5rem] leading-[1.5rem] flex justify-start items-centers ">
                 
                  <p className="font-[700] text-[1.5rem] leading-[1.5rem] ml-[2.3rem] mr-[1.8rem]">
                    {faq1 ? "-" : "+"}
                  </p>
                    What kind of equipment is needed for the install?

                  </h2>
                </div>
                <div
                  className="pb-[1.5rem] flex flex-col"
                  style={faq1 ? { display: "flex" } : { display: "none" }}
                >
                  <p className="font-[500] text-[1.5rem] leading-[2.6rem] ml-[5.1rem]">Most larger units within city limits require a building permit. Depending on where you live, the process for obtaining a permit can vary. Contact your local building department to see about their requirements.</p>
                </div>
              </div>
              <div
                class={`w-[74.7rem] rounded-[.46rem]  mb-[1.8rem] cursor-pointer border-[1px] border-[#7D3E1C] ${faq2 ? "h-[auto]" : "h-[4.6rem]"}`}
                onClick={() => setfaq2(!faq2)}>
                <div class="top ">
                 
                  <h2 className=" pb-[1.5rem] pt-[1.6rem] font-[700] text-[1.5rem] leading-[1.5rem] flex justify-start items-centers ">
                 
                  <p className="font-[700] text-[1.5rem] leading-[1.5rem] ml-[2.3rem] mr-[1.8rem]">
                  {faq2 ? "-" : "+"}
                  </p>
                    What kind of equipment is needed for the install?

                  </h2>
                </div>
                <div
                  className="pb-[1.5rem] flex flex-col"
                  style={faq2 ? { display: "flex" } : { display: "none" }}
                >
                  <p className="font-[500] text-[1.5rem] leading-[2.6rem] ml-[5.1rem]">Most larger units within city limits require a building permit. Depending on where you live, the process for obtaining a permit can vary. Contact your local building department to see about their requirements.</p>
                </div>
              </div>
              <div
                class={`w-[74.7rem] rounded-[.46rem] mb-[1.8rem] cursor-pointer border-[1px] border-[#7D3E1C] ${faq3 ? "h-[auto]" : "h-[4.6rem]"}`}
                onClick={() => setfaq3(!faq3)}>
                <div class="top ">
                 
                  <h2 className=" pb-[1.5rem] pt-[1.6rem] font-[700] text-[1.5rem] leading-[1.5rem] flex justify-start items-centers ">
                 
                  <p className="font-[700] text-[1.5rem] leading-[1.5rem] ml-[2.3rem] mr-[1.8rem]">
                  {faq3 ? "-" : "+"}
                  </p>
                    What kind of equipment is needed for the install?

                  </h2>
                </div>
                <div
                  className="pb-[1.5rem] flex flex-col"
                  style={faq3 ? { display: "flex" } : { display: "none" }}
                >
                  <p className="font-[500] text-[1.5rem] leading-[2.6rem] ml-[5.1rem]">Most larger units within city limits require a building permit. Depending on where you live, the process for obtaining a permit can vary. Contact your local building department to see about their requirements.</p>
                </div>
              </div>
              <div
                class={`w-[74.7rem] rounded-[.46rem] mb-[1.8rem] cursor-pointer border-[1px] border-[#7D3E1C] ${faq4 ? "h-[auto]" : "h-[4.6rem]"}`}
                onClick={() => setfaq4(!faq4)}>
                <div class="top ">
                 
                  <h2 className=" pb-[1.5rem] pt-[1.6rem] font-[700] text-[1.5rem] leading-[1.5rem] flex justify-start items-centers ">
                 
                  <p className="font-[700] text-[1.5rem] leading-[1.5rem] ml-[2.3rem] mr-[1.8rem]">
                  {faq4 ? "-" : "+"}
                  </p>
                    What kind of equipment is needed for the install?

                  </h2>
                </div>
                <div
                  className="pb-[1.5rem] flex flex-col"
                  style={faq4 ? { display: "flex" } : { display: "none" }}
                >
                  <p className="font-[500] text-[1.5rem] leading-[2.6rem] ml-[5.1rem]">Most larger units within city limits require a building permit. Depending on where you live, the process for obtaining a permit can vary. Contact your local building department to see about their requirements.</p>
                </div>
              </div>
              <div
                class={`w-[74.7rem] rounded-[.46rem] mb-[1.8rem] cursor-pointer border-[1px] border-[#7D3E1C] ${faq5 ? "h-[auto]" : "h-[4.6rem]"}`}
                onClick={() => setfaq5(!faq5)}>
                <div class="top ">
                 
                  <h2 className=" pb-[1.5rem] pt-[1.6rem] font-[700] text-[1.5rem] leading-[1.5rem] flex justify-start items-centers ">
                 
                  <p className="font-[700] text-[1.5rem] leading-[1.5rem] ml-[2.3rem] mr-[1.8rem]">
                  {faq5 ? "-" : "+"}
                  </p>
                    What kind of equipment is needed for the install?

                  </h2>
                </div>
                <div
                  className="pb-[1.5rem] flex flex-col"
                  style={faq5 ? { display: "flex" } : { display: "none" }}
                >
                  <p className="font-[500] text-[1.5rem] leading-[2.6rem] ml-[5.1rem]">Most larger units within city limits require a building permit. Depending on where you live, the process for obtaining a permit can vary. Contact your local building department to see about their requirements.</p>
                </div>
              </div>
              <div
                class={`w-[74.7rem] rounded-[.46rem] mb-[1.8rem] cursor-pointer border-[1px] border-[#7D3E1C] ${faq6 ? "h-[auto]" : "h-[4.6rem]"}`}
                onClick={() => setfaq6(!faq6)}>
                <div class="top ">
                 
                  <h2 className=" pb-[1.5rem] pt-[1.6rem] font-[700] text-[1.5rem] leading-[1.5rem] flex justify-start items-centers ">
                 
                  <p className="font-[700] text-[1.5rem] leading-[1.5rem] ml-[2.3rem] mr-[1.8rem]">
                  {faq6 ? "-" : "+"}
                  </p>
                    What kind of equipment is needed for the install?

                  </h2>
                </div>
                <div
                  className="pb-[1.5rem] flex flex-col"
                  style={faq6 ? { display: "flex" } : { display: "none" }}
                >
                  <p className="font-[500] text-[1.5rem] leading-[2.6rem] ml-[5.1rem]">Most larger units within city limits require a building permit. Depending on where you live, the process for obtaining a permit can vary. Contact your local building department to see about their requirements.</p>
                </div>
              </div>
            
            </div>
            <button
                className="mt-[5.6rem] mr-[.5rem] w-[17.2rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                  boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
                }}
              >
   Learn More
                <img src={Larrow} className="ml-[1rem] w-[2.1rem] h-[.8rem]" alt="" />
              </button>
</div>
          {/* DIV2  */}
          <div className="w-[85.4rem] h-[87.2rem] flex justify-center items-center flex-col" style={{background : `url(${Faqpg})`, backgroundSize : "cover"}}>
{/* Paragraph  */}
<p className="w-[56.5rem] text-[#454545] text-center text-[2.2rem] font-[500] leading-[3.3rem]">Have a question with your Shelter? You’ve come to the right place. Here are some of the most common questions we get at E-Z UP, and if you still have questions  contact us anytime <br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
{/* INPUT  */}
<div className="mt-[4.8rem] mb-[6rem] w-[48rem] h-[4.7rem] border-2 rounded-[5rem] border-[#7D3E1C] flex justify-between items-center">
<input type="text" className="outline-none bg-transparent ml-[2.2rem] font-[700] text-[1.4rem] leading-[2.9rem]" placeholder="Search" />
<img src={Search} alt="" className="w-[5rem] h-[4.8rem]"/>
</div>
{/* BUTTONS  */}
<div className="flex">
              <button
                className="mr-[2rem] w-[19.7rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                  boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
                  
                }}
              >
                <img src={Phone} className="mr-[1rem] w-[2.2rem] h-[2.2rem]" alt="" />
                123 456 789
              </button>
              <button className="mr-[2rem] w-[16.5rem] border-2 border-[#7D3E1C] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center text-[#454545]">
                <img src={Chatbl} className="mr-[1rem] w-[2.2rem] h-[2.2rem]" alt="" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>


{/* SECTION 9 */}
      <section className="bg-[#F9F3E9] flex flex-col justify-center items-center pt-[18.4rem]" style={{background: "linear-gradient(180deg, #F9F3E9 4.16%, rgba(219, 175, 150, 0.458333) 48.84%, #F9F3E9 93.53%)"}}>
        <h1 className="leading-[6rem] text-[6rem] font-[700] m-auto text-center">
        What Our   <span className="gradient-text">Client</span> Says
        </h1>
        <div
          className="w-[63.9rem] h-[63.9rem] absolute left-[-18.2rem]"
          style={{ background: `url(${BgPolygon})`, backgroundSize: "cover" }}
        ></div>
        <div className="flex w-[139.8rem] justify-center m-auto mt-[8.8rem]">
          <div
            className="w-[42rem] h-[42rem] flex flex-col justify-center items-center"
            style={{ background: `url(${Simplepg})`, backgroundSize:"cover" }}
          >
            <img src={Quote} alt="" className="w-[4rem] h-[3rem]"/>
            
            <p className="font-[500] text-[1.4rem] leading-[2.8rem] w-[30.6rem] text-center my-[.8rem] text-[#454545]">
            Excellent service, even better product. I am using this shelter to protect a boat from rain, snow and droppings of all kind. Framing is solid and strong. Thank you.

            </p>
            <img src={Stars} alt="" className="w-[11.2rem] h-[1.6rem]"/>
            <img src={Client} alt="" className="mt-[1.6rem] mb-[.8em] w-[6.4rem] h-[6.4rem]"/>
            <p className="text-[2.4rem] leading-[2.4rem] font-[500]">Madeline</p>
            <p  className="text-[1.6rem] leading-[1.6rem] text-[#666568] mt-[.8rem] font-[500]">Client</p>
          </div>
          <div
            className="w-[42rem] h-[42rem] flex flex-col justify-center items-center"
            style={{ background: `url(${Simplepg})`, backgroundSize:"cover" }}
          >
            <img src={Quote} alt="" className=" w-[4rem] h-[3rem]"/>
            
            <p className="font-[500] text-[1.4rem] leading-[2.8rem] w-[30.6rem] text-center my-[.8rem] text-[#454545]">
            Great, arrives on time. Great quality.
Loved that they called me to confirm when I will receive it and making sure that we would be there and have the equipment to unload it.


            </p>
            <img src={Stars} alt="" className="w-[11.2rem] h-[1.6rem]"/>
            <img src={Client2} alt="" className="mt-[1.6rem] mb-[.8em] w-[6.4rem] h-[6.4rem]"/>
            <p className="text-[2.4rem] leading-[2.4rem] font-[500]">William Lee</p>
            <p  className="text-[1.6rem] leading-[1.6rem] text-[#666568] mt-[.8rem] font-[500]">Client</p>
          </div>
          <div
            className="w-[42rem] h-[42rem] flex flex-col justify-center items-center"
            style={{ background: `url(${Simplepg})`, backgroundSize:"cover" }}
          >
            <img src={Quote} alt="" className="w-[4rem] h-[3rem]"/>
            
            <p className="font-[500] text-[1.4rem] leading-[2.8rem] w-[30.6rem] text-center my-[.8rem] text-[#454545]">
            Quick shipping, great customer service via phone. Found exactly what I was looking and close to home. Would shop here again.

            </p>
            <img src={Stars} alt="" className="w-[11.2rem] h-[1.6rem]"/>
            <img src={Client3} alt="" className="mt-[1.6rem] mb-[.8em] w-[6.4rem] h-[6.4rem]"/>
            <p className="text-[2.4rem] leading-[2.4rem] font-[500]">Andre Smith</p>
            <p  className="text-[1.6rem] leading-[1.6rem] text-[#666568] mt-[.8rem] font-[500]">Client</p>
          </div>
         
        </div>
       
      </section>
      
{/* SECTION 10  */}
      <section className="pt-[16.3rem] bg-[#F9F3E9] ">
        <div
          className="h-[20.9rem] flex justify-center items-center w-[168.4rem] rounded-[.8rem] m-auto"
          style={{
            background:
              "linear-gradient(270deg, #000000 0%, #5A5A5A 50.01%, #000000 100%)",
          }}
        >
          <div className="w-[100%]  flex justify-between items-center ">
            <div className="ml-[11.3rem]">
              <p className="text-[2.4rem] font-[500] leading-[2.4rem] text-white mb-[1.4rem]">
                Have Any Ideas In Your Mind?
              </p>
              <p className="text-[3rem] font-[700] leading-[6rem] text-white">
              Contact us and design your own shelter by your choice
              </p>
            </div>
            <div className="flex">
            <button
                className="mr-[1.2rem] w-[25.9rem] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #7D3E1C -12.18%, #FA9C6A 51.93%, #7E3F1E 113.4%)",
                  boxShadow: "4px 38px 62px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img src={Homebtn} className="mr-[1rem] w-[2.2rem] h-[2.2rem]" alt="" />
                DESIGN YOUR SHELTER
              </button>
              <button
                className="mr-[.8rem] w-[19.7rem] h-[5rem] rounded-[.6rem] border-2 border-[#7D3E1C] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center">
                <img src={Phone} className="mr-[1rem] w-[2.2rem] h-[2.2rem]" alt="" />
                123 456 789
              </button>
              <button className="mr-[11.1rem] w-[16.5rem] border-2 border-[#7D3E1C] h-[5rem] rounded-[.6rem] text-[1.6rem] font-[700] leading-[3rem] text-white flex justify-center items-center">
                <img src={Chat} className="mr-[1rem] w-[2.2rem] h-[2.2rem]" alt="" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

{/* SECTION 11  */}
<section>
  <div className="w-[131.6rem] flex justify-between items-center m-auto mt-[5.6rem] mb-[5.5rem]">
    <div className="flex flex-col justify-center items-center  ">
      <img src={Footerphone} alt="" className="w-[8rem] h-[8.1rem]"/>
      <p className="font-[500] text-[2.4rem] leading-[2.8rem] text-[#454545] mt-[2rem]">123 456 789</p>
    </div>
    <div className="flex flex-col justify-center items-center ml-[37.1rem] mr-[28.6rem]">
      <img src={Footeremail} alt=""  className="w-[8rem] h-[8.1rem]"/>
      <p className="font-[500] text-[2.4rem] leading-[2.8rem] text-[#454545] mt-[2rem]">Email@domain.com</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src={Footerloc} alt=""  className="w-[8rem] h-[8.1rem]"/>
      <p className="font-[500] text-[2.4rem] leading-[2.8rem] text-[#454545] mt-[2rem]">Lorem ipsum dolor sit amet,
</p>
    </div>
  </div>
</section>
      <footer className="flex flex-col justify-between font-[500] text-[#454545]  border-t-[1px] border-[rgba(102,101,104,0.2)] text-[1.6rem] leading-[2.4rem] h-[42.6rem] pt-[6rem]">
        <div className="flex w-[164rem] m-auto relative">
          <div className="">
            <img src={Logo} alt="" className="w-[14.7rem] h-[14.7rem] mb-[.5rem]"/>
            <p className=" w-[44.1rem] font-[500] text-[1.6rem] leading-[2.4rem]">Alpine Structures provides its customers with only high quality durable steel & Faberic Shelters</p>
          </div>
          <div className="absolute left-[66.3rem]">
            <p className="font-[700] text-[2rem] leading-[2rem] gradient-text mb-[3.1rem]">Important Links</p>
            <p className="mb-[1rem] w-[14.2rem]">Project</p>
            <p className="mb-[1rem] w-[14.2rem]">About</p>
            <p className="mb-[1rem] w-[14.2rem]">Contact</p>
            <p className="mb-[1rem] w-[14.2rem]">FAQs</p>
          </div>
          <div className="absolute left-[103.1rem]">
          <p className="font-[700] text-[2rem] leading-[2rem] gradient-text mb-[3.1rem]">Products</p>

            <p className="mb-[1rem] w-[14.2rem]">Single Tube</p>
            <p className="mb-[1rem] w-[14.2rem]">Dual Truss</p>
            <p className="mb-[1rem] w-[14.2rem]">Container Mounted</p>
          </div>
          <div className="absolute left-[139.4rem]">
          <p className="font-[700] text-[2rem] leading-[2rem] gradient-text mb-[3.1rem]">Follow Us On Social Media</p>
           <div className="flex">

           <img src={Fbf} alt="" className="mr-[1.6rem] w-[2.4rem] h-[2.4rem]"/>
           <img src={Lnf} alt="" className="mr-[1.6rem] w-[2.4rem] h-[2.4rem]"/>
           <img src={Igf} alt="" className="mr-[1.6rem] w-[2.4rem] h-[2.4rem]"/>
           <img src={Twf} alt="" className="w-[2.4rem] h-[2.4rem]"/>
           </div>
          </div>
        </div>
        <div className=" py-[1.9rem] border-t-[1px] border-[rgba(102,101,104,0.2)] w-[100%] h-[8.2rem]">
          <div className="w-[164rem] flex justify-between items-center  m-auto"  >

          <p className=" mt-[2rem]">©Copyright 2022 Alpine Structures</p>
          <div className=" flex justify-center items-center mt-[2rem]">

          <p className="">Terms & Legal</p>
          <p className="ml-[3.4rem]">Privacy Policy</p>
          </div>
  
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
