"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
    subRoutes: [
      {
        label: "Team",
        route: "/team",
      },
    ],
  },
];

export default function Header() {
  const [hoverIndex, setHoverIndex] = useState<number | false>(false);
  setTimeout(() => {
    console.log("something in");
  }, 5000);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 50px",
        margin: "0px -50px",
        backgroundColor: "#FEFF6D",
      }}
    >
      <div>My Page</div>
      <ul style={{ display: "flex", gap: 30 }}>
        {menuLinks.map((item, index) => {
          const isHoveringItem = hoverIndex !== false && index === hoverIndex;
          const style = isHoveringItem
            ? {
                textDecoration: "underline",
              }
            : {
                textDecoration: "none",
              };

          return (
            <li key={item.route} id={`menu${item.label}`}>
              <Link
                style={style}
                href={item.route}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(false)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  console.log("something out");
}
