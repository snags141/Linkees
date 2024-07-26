import React from "react";
import ReactDOM from "react-dom/client";

import Linkees, { CHANNEL_TYPES } from "linkees";

import "./css/normalize.css";

const items = [
  {
    title: "Photograpy Portfolio",
    subtitle: "Wannabe semi-pro photographer",
    type: CHANNEL_TYPES.WEBSITE,
    link: "http://snags.myportfolio.com", //your personal website or portfolio  link
    image: '/images/portfolio.jpg'
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
    link: "https://soundcloud.com/snagsofficial",
    image: "/images/soundcloud.jpg"
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
        headerAvatar={'/favicon-96x96.png'}
        name={"Dan|snags."} />{" "}
      
    </React.StrictMode>
  );
}
