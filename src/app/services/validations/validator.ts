import { AbstractControl, FormGroup } from "@angular/forms";

export const pureEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const nameValidator = "[a-zA-Z][a-zA-Z ]+";
export const urlValidator = /^(ftp|http|https):\/\/[^ "]+$/;

export const phoneValidator = "[+][0-9() ]{7,}$";
export const phoneValidatorSL = /^(?:\+94|0)[1-9]\d{8}$/;
export const strongPasswordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export function confPassValidation(formGroup: FormGroup) {
  const passwordControl = formGroup.get("password");
  const confirmPasswordControl = formGroup.get("confirmPassword");

  if (passwordControl?.value !== confirmPasswordControl?.value) {
    confirmPasswordControl?.setErrors({ isError: true });
  } else {
    confirmPasswordControl?.setErrors(null);
  }
}

export function confEmailValidation(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const email = control?.get("email");
  const verifyEmail = control?.get("verifyEmail");

  if (email?.value !== verifyEmail?.value) {
    return { isNotConfirmedEmail: true };
  }

  return null;
}

export function maxDateValidator(control: AbstractControl) {
  const selectedDate = new Date(control.value);
  const today = new Date();

  if (selectedDate > today) {
    return { futureDate: true };
  }

  return null;
}

export function DOBValidator(control: AbstractControl) {
  const selectedDate = new Date(control.value);
  const today = new Date();

  const currentDate = new Date();

  const minDate = new Date();
  minDate.setFullYear(currentDate.getFullYear() - 200);

  const elderlyDate = new Date();
  elderlyDate.setFullYear(currentDate.getFullYear() - 18);

  // validate past and future dates
  if (selectedDate > today || selectedDate <= minDate) {
    return { invalidaDateRange: true };
  }

  if (elderlyDate < selectedDate) {
    return { elderlyDate: true };
  }

  return null;
}

/***
 * removing initial white spaces
 */
export function removeWhiteSpaces(control: AbstractControl) {
  if (control && control.value && !control.value.replace(/\s/g, "").length) {
    control.setValue("");
  }
  return null;
}

/**
 * remove all white spaces
 * @param control
 * @returns
 */
export function removeAllWhiteSpaces(control: AbstractControl) {
  if (control && control.value) {
    const trimmedValue = control.value.trim();
    if (trimmedValue.length !== control.value.length) {
      control.setValue(trimmedValue);
    }
  }
  return null;
}
