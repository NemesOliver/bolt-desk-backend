/**
 * Customize validation errors
 * @param {*} err from
 * @returns err object containing custom messages
 */

// handle errors
const handleDeskValidationErrors = (err) => {
  let errors = { name: "" };

  // duplicate name error
  if (err.code === 11000) {
    errors.name = "Name already in use";
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

module.exports = handleDeskValidationErrors;
