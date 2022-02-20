/**
 * Customize validation errors
 * @param {*} err
 * @param {*} customErrorObj Object containing fields you want to validate based on your schema
 * @param {String} uniqueItem Validate unique fields in db ie. emails or usernames
 * @returns err object containing custom messages
 */

module.exports.handleErrors = (err, customErrorObj, uniqueItem) => {
  let errors = customErrorObj;

  // validation errors
  if (err.message.includes("validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  // duplicate error
  if (err.code === 11000) {
    errors[uniqueItem] = "Needs to be unique";
    return errors;
  }

  return errors;
};
