/* @description - Function that validates the minimum number of required characters.
 *
 * @param max - Minimum length threshold value.
 */
export const minLength = (min) => (value) => {
  return min > -1 && value && value.length < min
    ? `Minimum of ${min} allowed`
    : undefined;
};
/**
 * @description - Function that validates the maximum number of allowed characters.
 * @param max - Maximum length threshold value.
 */
export const maxLength = (max) => (value) => {
  return max > -1 && value && value.length > max
    ? `Maximum of ${max} allowed`
    : undefined;
};

/* @description - Regex validator.
 *
 * @param regex - Regex rule.
 * @param message - Message to be shown on failing the regex match.
 */
export const regexValidation = (regex, message) => (value) => {
  return value && !regex.test(value) ? message : undefined;
};

/**
 * @description - Required field validator with the "Please enter" values.
 */
export const required = (fieldLabel) => (value) => {
  if (value instanceof FileList) {
    return value && value.length ? undefined : `Please Upload ${fieldLabel}`;
  }
  return value ? undefined : `Please Enter ${fieldLabel}`;
};

export const match = (matchingValue, message) => (value) => {
  return value && value !== matchingValue ? message : undefined;
};

export const fileValidation = (size, regex) => (value) => {
  const calculatedSizeInByte = 1024 * 1024 * size;
  return value && value.length && !regex.test(value[0].name)
    ? 'File Format Not Valid'
    : value && value.length && value[0].size > calculatedSizeInByte
      ? `*Maximum ${size} MB limit`
      : undefined;
};


