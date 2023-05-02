export interface TypWeatherContent {
  status: string;
  count: string;
  info: string;
  infocode: string;
  lives: any[];
}

export interface TypWeatherApiInput {
  cityCode: string;
}

export interface TypWeatherObj {
  province: string;
  city: string;
  adcode: string;
  weather: string;
  temperature: string;
  winddirection: string;
  reporttime: string;
}
