import bg1 from "../../public/images/forest-931706.jpg";
import bg2 from "../../public/images/forest-3394066.jpg";
//import bg3 from '../../public/images/forest-3622519.jpg'
import bg4 from "../../public/images/hills-615429_1920.jpg";
// import bg5 from '../../public/images/lightning-2287319_1920.jpg'
import bg6 from "../../public/images/sky-690293_1920.jpg";
import bg7 from "../../public/images/sky-690293.jpg";
import bg8 from "../../public/images/tree-736875.jpg";
import bg9 from "../../public/images/1field.jpg";
import bg10 from "../../public/images/1winter.jpg";
import bg11 from "../../public/images/1milk.jpg";
import React from "react";

let bg = [bg1, bg2, bg4, bg6, bg7, bg8, bg9, bg10, bg11];

const getRandomBGPath = () => {
  return bg[Math.floor(Math.random() * bg.length)];
};

const Background = React.memo(() => {
  return (
    <section>
      <div id="gradient-bg"></div>
      <img src={getRandomBGPath()} className="banner" />
    </section>
  );
});

export default Background;
