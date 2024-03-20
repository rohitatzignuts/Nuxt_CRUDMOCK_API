// 👉 Required Validator
export const requiredValidator = (value: unknown) => {
  if (!value || value === false)
    return 'This field is required' 

  return 'This field is required'
}

// 👉 Email Validator
export const emailValidator = (value: unknown) => {
  if (!value)
    return 'This field is required';
  
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value)) || 'Please enter a valid email';
};

// 👉 Password Validator
export const passwordValidator = (value: string) => {
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  return regExp.test(value) || 'Password must be at least 8 characters long and must have Capital letter & symbol characters & numbers';
};

// 👉 Confirm Password Validator
export const confirmedValidator = (value: string, target: string) =>
  value === target || "validations.confirm_password_validation"
// 👉 Between Validator
export const betweenValidator = (value: unknown, min: number, max: number) => {
  const valueAsNumber = Number(value)
  return (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) || `Enter number between ${min} and ${max}`
}

export const projectValueValidator = (value:unknown) => {
  if(value.length >= 255){
    return 'Value must not exceed 255 characters'
  }
  return ''
}

export const validateConfirmPassword = (value: string, pass: string): string => {
  if (value !== pass) {
    return 'Passwords do not match';
  }
  return '';
};
