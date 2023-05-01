export interface TypAlertState {
  isAlertOpen: boolean;
  title: string;
  content: string;
  severity: any;
}

export interface TypInfoState {
  isLoading: boolean;
  alertMeta: TypAlertState;
}
