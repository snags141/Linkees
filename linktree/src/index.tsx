import React from "react";
import ReactDOM from "react-dom/client";

import Linkees, { CHANNEL_TYPES } from "linkees";

import "./css/normalize.css";

const items = [
  {
    title: "Photograpy Portfolio",
    subtitle: "Wannabe semi-pro photographer",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://cdn.myportfolio.com/99f4e44b-ba68-4a34-aa6f-78b3565bf0f5/15042609-069f-4635-a69a-473ebe815ed6_rw_1920.jpg?h=f1e0f300b48fb042670e5aec1a2f5482", //your personal website or portfolio  link
    image: 
  },
  {
    title: "Instagram",
    subtitle: "@dan_snags | I post my photography when I'm not too lazy",
    type: CHANNEL_TYPES.INSTAGRAM,
    link: "https://instagram.com/dan_snags", //instagram profile link
  },
  {
    title: "GitHub",
    subtitle: "@snags141 | 🏡 to all my open-source projects",
    type: CHANNEL_TYPES.GITHUB,
    link: "https://github.com/snags141", //Github Profile link
  },
  {
    title: "LinkedIn",
    subtitle: "Know more about my profession 👨‍💼",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/in/danielharvey11", // linkedin
  },
  {
    title: "YouTube",
    subtitle: "Watch my cringy youtube videos",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://www.youtube.com/@DanielHarvey", //youtube channel link
  },
  {
    title: "My Music",
    subtitle: "@snagsofficial | Random tunes I write ",
    type: CHANNEL_TYPES.DRIBBLE,
    link: "https://soundcloud.com/snagsofficial", // Dribbble profile link
  },
  {
    title: "Twitter",
    subtitle: "@danharv3",
    type: CHANNEL_TYPES.TWITTER,
    link: "https://twitter.com/danharv3", // twitter profile link
  },
  // {
  //   title: "Telegram",
  //   subtitle: "@heysagnik | Chat with me instantly ",
  //   type: CHANNEL_TYPES.TELEGRAM,
  //   link: "https://telegram.me/heysagnik", //Telegram Pofile
  // },
];

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement)?.render(
    <React.StrictMode>
      <Linkees 
        cardItems={items}
        headerAvatar={'https://instagram.fsyd3-1.fna.fbcdn.net/v/t51.29350-15/286115689_547095107087847_3701199399018929394_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fsyd3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=NKaJm0zGxGIQ7kNvgEzizlT&gid=dd44e2f0c5ee4e5f9979357a666319cf&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=Mjg1NTI4NDYxODgwNjIwNDk0Mw%3D%3D.2-ccb7-5&oh=00_AYDV1mU6WAdrRMyWRv_YEtYx1KITF3Tr6iSNxaqKLHo4qA&oe=66A92F69&_nc_sid=8f1549'}
        name={"Dan|snags."} />{" "}
      
    </React.StrictMode>
  );
}
