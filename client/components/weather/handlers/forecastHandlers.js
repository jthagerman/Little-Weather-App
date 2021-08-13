import {
  Sun,
  CloudLightningRain,
  Cloudy,
  CloudSun,
  MoonStars,
  Moon,
  CloudHaze,
  CloudRainHeavy,
  CloudRain,
  CloudFog
} from "react-bootstrap-icons";

import React from 'react'


//NEEDS TO BE REFACTORED
const ForecastHandler = (props) => {
  const size = props.size;
  const weather = props.weather;

  switch (weather) {
    case "Mostly Sunny then Chance Showers And Thunderstorms":
      return <Sun size={size}></Sun>;
    case "Chance Showers And Thunderstorms":
      return <CloudLightningRain size={size}></CloudLightningRain>;
    case "Showers And Thunderstorms Likely":
      return <CloudLightningRain size={size}></CloudLightningRain>;
    case "Chance Showers And Thunderstorms then Partly Cloudy":
      return <CloudLightningRain size={size}></CloudLightningRain>;
    case "Mostly Sunny then Slight Chance Showers And Thunderstorms":
      return <Sun size={size}></Sun>;
    case "Slight Chance Showers And Thunderstorms":
      return <CloudSun size={size} />;
    case "Slight Chance Showers And Thunderstorms then Mostly Clear":
      return <CloudSun size={size} />;
    case "Sunny":
      return <Sun size={size}></Sun>;
    case "Mostly Clear then Slight Chance Showers And Thunderstorms":
      return <Moon size={size} />;
    case "Scattered Showers And Thunderstorms":
      return <CloudLightningRain size={size}></CloudLightningRain>;
    case "Slight Chance Showers And Thunderstorms then Mostly Sunny":
      return <CloudSun size={size} />;
    case "Sunny then Slight Chance Showers And Thunderstorms":
      return <Sun size={size}></Sun>;
    case "Mostly Sunny":
      return <Sun size={size}></Sun>;
    case "Partly Cloudy":
      return <CloudSun size={size} />;
    case "Mostly Clear":
      return <MoonStars size={size} />;
    case "Clear":
      return <MoonStars size={size} />;
    case "Isolated Showers And Thunderstorms":
      return <CloudSun size={size} />;
    case "Mostly Sunny then Isolated Showers And Thunderstorms":
      return <CloudSun size={size} />;
    case "Chance Showers And Thunderstorms then Showers And Thunderstorms":
      return <CloudLightningRain size={size}></CloudLightningRain>;
    case "Haze":
      return <CloudHaze size={size} />;
    case "Mostly Cloudy":
      return <Cloudy size={size} />;
    case "Slight Chance Rain Showers":
      return <CloudRain size={size} />;
    case "Slight Chance Rain Showers then Partly Cloudy":
      return <CloudRain size={size} />;
    case "Chance Rain Showers":
      return <CloudRainHeavy size={size} />;
    case "Areas Of Smoke then Haze":
      return <CloudHaze size={size} />;
    case "Slight Chance Light Rain then Partly Cloudy":
      return <Cloudy size={size} />;
    case "Slight Chance Light Rain then Chance Showers And Thunderstorms":
      return <CloudRain size={size} />;
    case "Isolated Rain Showers":
      return <Cloudy size={size} />;
    case 'Chance Showers And Thunderstorms then Showers And Thunderstorms Likely':
      return <CloudLightningRain size={size}></CloudLightningRain>;
      case'Chance Rain Showers then Chance Showers And Thunderstorms':
      return <CloudRain size={size} />;
      case'Chance Rain Showers then Slight Chance Showers And Thunderstorms':
      return <CloudRain size={size} />;
     case 'Partly Sunny':
      return <CloudSun size={size} />;
      case'Chance Showers And Thunderstorms then Mostly Sunny':
      return <CloudLightningRain size={size}></CloudLightningRain>;
      case'Slight Chance Rain Showers then Slight Chance Showers And Thunderstorms':
      return <Cloudy size={size} />;
      case'Partly Sunny then Slight Chance Rain Showers':
      return <CloudSun size={size} />;
      case'Chance Rain Showers then Mostly Sunny':
      return <CloudRain size={size} />;
      case'Mostly Cloudy then Chance Showers And Thunderstorms':
      return <Cloudy size={size} />;
      case'Showers And Thunderstorms':
      return <CloudLightningRain size={size}></CloudLightningRain>;
      case'Rain Showers Likely':
      return <CloudRain size={size} />;
      case'Patchy Fog then Chance Showers And Thunderstorms':
      return <CloudFog size={size} />;


    default:
      console.log("weahter condition noput found", weather);
      return <Sun size={size}></Sun>;
  }
};


export default ForecastHandler
/*



exp








*/
