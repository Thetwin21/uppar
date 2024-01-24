"use client";
import List from "@/comps/TopchartList";
import NavWrapper from "@/comps/Nav-wrapper";
import Navbar from "@/comps/Navbar";
import ImageSlider from "@/comps/Slider";
import { TopchartData } from "@/data/TopchartData";
import Image from "next/image";
import Slider from "react-slick";

export default function Home() {
  return (
    <section className="home">
      <NavWrapper>
        <h2 className="text-3xl font-bold">
          Discover: Experience more in the decentralized web
        </h2>
        <Navbar />
      </NavWrapper>
      <SponsoredAdd />
      <Recommended />
      <Topchart />
      <BestApp />
      <NewArrival />
    </section>
  );
}
export function SponsoredAdd() {
  return (
    <div>
      <div className="flex gap-x-3">
        <Image
          src={require("../assets/image 1.svg")}
          width={320}
          height={150}
        />
        <Image
          src={require("../assets/image 1.svg")}
          width={320}
          height={150}
        />
        <Image
          src={require("../assets/image 1.svg")}
          width={320}
          height={150}
        />
      </div>
    </div>
  );
}
const imgData = [
  {
    id: 1,
    img: (
      <Image
        height="200px"
        width="100%"
        src={require("../assets/Rectangle 4 (1).svg")}
      />
    ),
    description: "camera",
    price: 200,
  },
  {
    id: 2,
    img: (
      <Image
        height="200px"
        width="100%"
        src={require("../assets/Rectangle 4 (1).svg")}
      />
    ),
    description: "Phone",
    price: 100,
  },
  {
    id: 3,
    img: (
      <Image
        height="200px"
        width="100px"
        src={require("../assets/Rectangle 4 (1).svg")}
      />
    ),
    description: "Laptop",
    price: 500,
  },
  {
    id: 4,
    img: (
      <Image
        height="200px"
        width="100%"
        src={require("../assets/Rectangle 4 (1).svg")}
      />
    ),
    description: "Headephone",
    price: 40,
  },
  {
    id: 5,
    img: (
      <Image
        height="200px"
        width="100%"
        src={require("../assets/Rectangle 4 (1).svg")}
      />
    ),
    description: "Keyboard",
    price: 140,
  },
  {
    id: 6,
    img: (
      <Image
        height="200px"
        width="100%"
        src={require("../assets/Rectangle 4 (1).svg")}
      />
    ),
    description: "Gaming Mouse",
    price: 140,
  },
];
export function Recommended() {
  const settings = {
    arrows: true,
    initialSlide: 0,
    // infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // afterchange: (current) => {
    //   setProgress((100 / (data.length - slidesToShow + 1)) * (current + 1));
    //   console.log(slidesToShow);
    // },
  };
  return (
    <div className="recommended-container my-5">
      <div className="slider-container bg-black">
        <div className="slider bg-yellow-50 overflow-x-hidden">
          <Slider {...settings}>
            {imgData.map((item, index) => (
              <div key={item.id} className="mr-5">
                {item.img}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export function Topchart() {
  return (
    <div className="max-w-[100%] w-96 md:w-[36rem] lg:w-[48rem]">
      <h3>Top Chart</h3>
      <div>
        <div className="w-full grid grid-cols-4 gap-3 my-10">
          <button className="border-[0.4px] p-1 cursor-pointer rounded-sm">
            Mobile
          </button>
          <button>Desktop</button>
          <button>Free</button>
          <button>Paid</button>
        </div>
        <ol className="w-full grid grid-cols-3 gap-4 list-decimal list-outside pl-3 marker:text-blue-700">
          {TopchartData.map((item, index) => (
            <li key={item.id} className="flex gap-3 topchart-list">
              <div>{item.img}</div>
              <div className="flex flex-col">
                <h4 className="text=[24px] font-bold">{item.name}</h4>
                {item.subcategory ? (
                  <span className="text-[12px] font-semibold">
                    {item.category} {item.subcategory}
                  </span>
                ) : (
                  <span className="text-[12px] font-semibold">
                    {item.category}
                  </span>
                )}
                <span className="">{item.rate}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export function BestApp() {
  return (
    <div>
      <div className="w-full bg-[#290000] flex">
        <div>
          <Image src={require("../assets/Golden_.png")} />
        </div>
        <div>
          <div className="flex gap-x-5">
            {TopchartData.map((item, index) => (
              <div className="flex flex-col gap-y-1 justify-center text-[#ffffff]"> 
                <div>{item.img}</div>
                <div className="flex flex-col text-[13px] font-semibold">
                  <span>{item.category}</span>
                  <span>{item.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export function NewArrival() {
  return <div>New Arrival</div>;
}
