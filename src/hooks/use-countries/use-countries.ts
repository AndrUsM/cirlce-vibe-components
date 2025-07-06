import { useMemo } from 'react';
import { COUNTRY_CODES } from '@circle-vibe/shared';

const TRANSLATION_PREFIX = 'country';

export const useCountries = () => {
  return useMemo(
    () =>
      COUNTRY_CODES.map((code) => ({
        code,
        label: `${TRANSLATION_PREFIX}.${code}`,
      })),
    []
  );
};
