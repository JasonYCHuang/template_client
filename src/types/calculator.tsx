export interface TypCalculatorState {
  result: number;
  status: 'loading' | 'idle';
  error: string | null;
}
