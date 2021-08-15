const reduceToType = (hourArray) => {
  let clear = 0;
  let rain = 0;
  let cloud = 0;

  hourArray.forEach((element) => {
    const forecast = element.shortForecast.toLowerCase().split(" ");
    let clearW = forecast.some((r) =>
      ["sunny", "sunshine", "clear", "sun"].includes(r)
    );
    let cloudy = forecast.some((r) =>
      ["cloudy", "clouds", "haze", "fog"].includes(r)
    );
    let rains = forecast.some((r) =>
      [
        "rain",
        "rains",
        "snow",
        "sleet",
        "showers",
        "thunderstorms",
        "thundrstorm",
        "thundershower",
      ].includes(r)
    );


    if (clearW) clear++;
    else if (cloudy) {
      if(forecast.includes('slightly')) clear++
      else cloud++

    }
    else if (rains) {
      if(forecast.includes('slight')) cloud++
      else if(forecast.includes('chance')) cloud++
      else rain++
    }
    else clear++;
  });

  return[clear, cloud, rain];


}

export default reduceToType
