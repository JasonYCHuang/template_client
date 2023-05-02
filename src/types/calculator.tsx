import { TypWeatherObj } from './weather';

export interface TypCalculatorState {
  weather: TypWeatherObj;
  result: number;
  status: 'loading' | 'idle';
  error: string | null;
}
