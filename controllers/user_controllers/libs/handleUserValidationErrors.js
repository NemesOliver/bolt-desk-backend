/**
 * Customize validation errors
 * @param {*} err from
 * @returns err object containing custom messages
 */

// handle errors
const handleUserValidationErrors = (err) => {
  let errors = { email: "", password: "" };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports = handleUserValidationErrors;
