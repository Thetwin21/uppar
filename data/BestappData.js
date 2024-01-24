import Image from "next/image";

export const BestAppData = [
  {
    id: 1,
    name: "MeanFi",
    category: "Defi",
    subcategory: "Wallet",
    img: (
      <Image
        src={require("../assets/Tweedo.jpeg")}
        width={100}
        height={100}
      />
    ),
    rate: 4.5
  },
  {
    id: 2,
    name: "Chingari",
    category: "Social Media",
    img: (
      <Image
      src={require("../assets/logo12.jpeg")}
        width={100}
        height={100}
      />
    ),
    rate: 4.5
  },
  {
    id: 3,
    name: "Solcial",
    category: "Defi",
    subcategory: "Payments",
    img: (
      <Image
      src={require("../assets/Beachbuggy.jpeg")}
        width={100}
        height={100}
      />
    ),
    rate: 4.5
  },
  {
    id: 4,
    name: "PIP",
    category: "Defi",
    subcategory: "Payment",
    img: (
      <Image
      src={require("../assets/Rectangle 17 (1).svg")}
        width={100}
        height={100}
      />
    ),
    rate: 4.5
  },
  {
    id: 5,
    name: "Secretrum",
    category: "Finance",
    subcategory: "Trading",
    img: (
      <Image
      src={require("../assets/Rectangle 17 (2).svg")}
        width={100}
      />
    ),
    rate: 4.5
  },
  {
    id:6,
    name: "Zignaly",
    category: "Finance",
    img: (
      <Image
      src={require("../assets/Rectangle 17 (3).svg")}
        width={100}
        height={100}
      />
    ),
    rate: 4.5
  },
  {
    id: 7,
    name: "Blockasset",
    category: "NFT",
    img: (
      <Image
      src={require("../assets/Rectangle 17 (4).svg")}
        width={100}
        height={100}
      />
    ),
    rate: 4.5
  },
  {
    id:8,
    name: "Zebec Protocol",
    category: "Finance",
    subcategory: "Payment",
    img: (
      <Image
      src={require("../assets/Rectangle 17 (5).svg")}
        width={100}
        height={100}
      />
    ),
    rate: 4.5
  },
  {
    id:9,
    name: "Defi Land",
    category: "Games",
    img: (
      <Image
      src={require("../assets/Rectangle 17 (6).svg")}
        width={100}
        height={100}
      />
    ),
    rate: 4.5
  },
];
