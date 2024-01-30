export default function Validation(formData) {
  const errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (formData.firstName === "") {
    errors.firstName = "Enter the first name";
  } else if (formData.lastName === "") {
    errors.lastName = "Enter the last name";
  } else if (formData.email === "") {
    errors.email = "Please enter your email address";
  }
  if (!email_pattern.test(formData.email)) {
    errors.email = "Email not Correct";
  } else if (formData.companyName) {
    errors.companyName = "Please enter your company name";
  } else if (formData.country === "") {
    errors.country = "Please enter your country";
  } else if (formData.streetAddress === "") {
    errors.streetAddress = "Please enter your street address";
  } else if (formData.region) {
    errors.region = "Please enter your region";
  } else if (formData.postalCode) {
    errors.postalCode = "Please enter your postal code";
  } else {
    return errors;
  }
}
