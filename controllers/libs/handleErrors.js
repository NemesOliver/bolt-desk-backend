/**
 * Customize validation errors
 * @param {*} err 
 * @param {*} customErrorObj Object containing fields you want to validate based on your schema
 * @returns err object containing custom messages
 */

module.exports.handleErrors = (err, customErrorObj) => {
  let errors = customErrorObj;

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
