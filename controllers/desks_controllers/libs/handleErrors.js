/**
 * Customize validation errors
 * @param {*} err
 * @returns err object containing custom messages
 */

module.exports.handleErrors = (err) => {
  let errors = { name: "" };

  // duplicate email error
  if (err.code === 11000) {
    errors.name = "Name has to be unique";
    return errors;
  }

  // validation errors
  if (err.message.includes("Desk validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
