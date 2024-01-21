import Image from "next/image";

export const SideNavItem = [
  {
    title: "Discover",
    path: "/",
    icon: (
      <Image
        src={require("../../assets/discovery.svg")}
        width={30}
        height={30}
      />
    ),
  },
  {
    title: "Apps",
    path: "/apps",
    icon: (
      <Image
        src={require("../../assets/Group.svg")}
        width={21}
        height={21}
      />
    ),
  },
  {
    title: "Games",
    path: "/games",
    icon: (
      <Image
        src={require("../../assets/game.svg")}
        width={28}
        height={28}
      />
    ),
  },
  {
    title: "Upcoming",
    path: "/upcoming",
    icon: (
      <Image
        src={require("../../assets/Vector (2).svg")}
        width={28}
        height={28}
      />
    ),
  },
  {
    title: "Report",
    path: "/report",
    icon: (
      <Image
        src={require("../../assets/Report.svg")}
        width={30}
      />
    ),
  },
  {
    title: "Event",
    path: "/events",
    icon: (
      <Image
        src={require("../../assets/Gift.svg")}
        width={28}
        height={28}
      />
    ),
  },
  {
    title: "Settings",
    path: "/settings",
    icon: (
      <Image
        src={require("../../assets/Settings (1).svg")}
        width={28}
        height={28}
      />
    ),
  },
  {
    title: "Profile",
    path: "/myprofile",
    icon: (
      <Image
        src={require("../../assets/discovery.svg")}
        width={28}
        height={28}
      />
    ),
  },
];
