import Image from "next/image";
export const GamesTrending = [
  {
    id: 1,
    img: <Image src={require("../assets/app.svg")} width={"100%"} height={"100%"}
    className="object-cover hidden trending-apps-img" />,
    devLogo: <Image src={require("../assets/Rectangle 17 (9).svg")} width={"100%"} height={"100%"}
    className="object-cover hidden" />,
    appName: "Gala Games",
    category: "Games",
    rate: 4.5,
  },
  {
    id: 2,
    img: (
      <Image
        src={require("../assets/image 1 (2).svg")}
        width={"100%"}
        height={"100%"}
        className="object-cover hidden"
      />
    ),
    devLogo:  <Image src={require("../assets/Rectangle 17 (10).svg")} width={"100%"} height={"100%"}
    className="object-cover hidden" />,
    appName: "Playdex",
    category: "Games",
    rate: 4.5,
  },
  {
    id: 3,
    img: (
      <Image
        src={require("../assets/image 1 (1).svg")}
        width={"100%"}
        height={"100%"}
        className="object-cover hidden"
      />
    ),
    devLogo:  <Image src={require("../assets/Rectangle 17 (11).svg")} width={"100%"} height={"100%"}
    className="object-cover hidden" />,
    appName: "Cards of Ethernity",
    category: "Games",
    rate: 4.5,
  },
  {
    id: 4,
    img: <Image src={require("../assets/app.svg")} width={"100%"} height={"100%"}
    className="object-cover hidden" />,
    devLogo:  <Image src={require("../assets/Rectangle 17 (8).svg")} width={"100%"} height={"100%"}
    className="object-cover hidden" />,
    appName: "Planet IX",
    category: "Games",
    rate: 4.5,
  },
  {
    id: 5,
    img: (
      <Image
        src={require("../assets/image 1 (2).svg")}
        width={"100%"}
        height={"100%"}
        className="object-cover hidden"
      />
    ),
    devLogo:  <Image src={require("../assets/Rectangle 17 (10).svg")} width={"100%"} height={"100%"}
    className="object-cover hidden" />,
    appName: "Captain TSUBASA",
    category: "Games",
    rate: 4.5,
  },
  {
    id: 6,
    img: (
      <Image
        src={require("../assets/image 1 (1).svg")}
        width={"100%"}
        height={"100%"}
        className="object-cover hidden"
      />
    ),
    devLogo:  <Image src={require("../assets/Rectangle 17 (11).svg")} width={"100%"} height={"100%"}
    className="object-cover hidden" />,
    appName: "MetaFighter",
    category: "Games",
    rate: 4.5,
  },
];
