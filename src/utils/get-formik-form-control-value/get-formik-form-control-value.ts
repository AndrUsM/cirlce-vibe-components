import { SyntheticEvent } from 'react';

export const getFormikFormControlValue = (event: SyntheticEvent<HTMLInputElement>) => {
  const target = event.currentTarget;

  if (target.type === 'file') {
    return Boolean(target.files?.length) ? (target.files ?? [])[0] : undefined;
  }

  if (target.type === 'checkbox') {
    return target.checked;
  }

  if (target.type === 'textearea') {
    return target.value;
  }

  return target.value;
};


export const getFormikTextreaFormControlValue = (event: SyntheticEvent<HTMLTextAreaElement>) => {
  const target = event.currentTarget;
  return target.value;
}