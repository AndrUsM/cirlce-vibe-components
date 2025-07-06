export interface FieldContextValue {
  value?: any;
  errors: null | string;
  type?: string;
  inputMode?: string;
  touched?: boolean;
  name: string | null;
  isRequired?: boolean;
  setTouched: (touched: boolean) => void;
  onBlur: (_event: unknown) => void;
  setValue: (updatedValue: any) => void;
  setError: (error: string | null) => void;
}