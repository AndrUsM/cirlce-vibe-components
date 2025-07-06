type Message = [string, any];

interface Validation {
  key: string;
  values?: Record<string, unknown>;
}


export const getFormikFormControlError = (validation?: Validation | string | null): Message => {
  if (typeof validation === 'string' || !validation) {
    return [validation ?? '', undefined];
  }

  if (validation.key && validation.values) {
    return [validation.key, validation.values];
  }

  return Object.values(validation).map(getFormikFormControlError)[0] || ['', undefined];
};