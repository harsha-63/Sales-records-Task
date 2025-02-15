import Joi from "joi";

export const salesValidationSchema = Joi.object({
  salespersonName: Joi.string().required(),
  branch: Joi.string().required(),
  amount: Joi.number().min(1).required(),
  description: Joi.string().allow(""),
});


