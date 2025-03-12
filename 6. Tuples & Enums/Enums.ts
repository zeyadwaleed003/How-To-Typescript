// If U do not assign any values, TS will automatically give them values, the values given are there index
enum WeatherConditions {
  Sunny, // 0
  cloudy, // 1
  rainy, // 2
  snowy, // 3
}

console.log(WeatherConditions.snowy);

enum WeatherConditions1 {
  Sunny = 'sunny',
  cloudy = 'cloudy',
  rainy = 'rainy',
  snowy = 'snowy',
}

console.log(WeatherConditions1.snowy);
