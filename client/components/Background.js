const bg1 = "/images/p1.jpg";
const bg2 = "/images/p2.jpg"; //
const bg3 = "/images/hills-615429_1920.jpg";
const bg4 = "/images/p3.jpg"; //
const bg5 = "/images/tulips.jpg";
const bg6 = "/images/forest-931706.jpg";
const bg7 = "/images/forest-3394066.jpg";

const bg8 = "/images/p5.jpg"; //= "/images/tree-736875.jpg";
const bg9 = "/images/p6.jpg"; //= "/images/1field.jpg";
const bg10 = "/images/1winter.jpg";
const bg11 = "/images/tree-736875.jpg";
const bg12 = "/images/1field.jpg";
import React from "react";

let bg = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12];

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
