import { ValidationError } from "yup";
export const validate = (schema) => async (req, res, next) => {
  try {
    const validated = await schema.validate(req.body, {
      abortEarly: false,   // show all errors
      stripUnknown: true,  // remove unexpected fields
    });
    req.body = validated;  // sanitized body
    next();
  } catch (err) {
    if (err instanceof ValidationError) {
      return res.status(400).json({
        success: false,
        errors: err.errors, // list of all validation messages
      });
    }
    next(err);
  }
};