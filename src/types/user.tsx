export interface TypUserState {
  auth: boolean | number;
  empId: string | null;
  status: 'loading' | 'idle';
  error: string | null;
}

export interface TypLogInMeta {
  status: string;
}

export interface TypLogInData {
  Empid: string | null;
  Password: string | null;
  IP: string | null;
  Sysid: string | null;
}

export interface TypLogInContent {
  meta: TypLogInMeta;
  data: TypLogInData;
}

export interface TypLogInApiInput {
  userId: string;
  password: string;
}
