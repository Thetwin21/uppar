"use client"; // for nextjs 13.4 user
import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Slider = () => {
  const filteredItems = [
    {
      id: 1,
      img: "./assets/Rectangle 4 (1).svg",
      description: "camera",
      price: 200,
    },
    {
      id: 2,
      img: "./assets/Rectangle 4 (1).svg",
      description: "Phone",
      price: 100,
    },
    {
      id: 3,
      img: "./assets/Rectangle 4 (1).svg",
      description: "Laptop",
      price: 500,
    },
    {
      id: 4,
      img: "./assets/Rectangle 4 (1).svg",
      description: "Headephone",
      price: 40,
    },
    {
      id: 5,
      img: "./assets/Rectangle 4 (1).svg",
      description: "Keyboard",
      price: 140,
    },
    {
      id: 6,
      img: "./assets/Rectangle 4 (1).svg",
      description: "Gaming Mouse",
      price: 140,
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
      <div className="trending">
        <div className="slider-container">
          <div className="title-btns">
            <h3></h3>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                <Link href={`/`} className="link">
                  <div className="item-header">
                    <Image src={require(item.img)} width={200} height={200} alt="product" />
                  </div>
                  <div className="item-description">
                    <p>{item.description}</p>
                    <p className="item-price">{item.price}$</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;