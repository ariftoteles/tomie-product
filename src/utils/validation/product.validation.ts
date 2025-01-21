import Joi from "joi";
import { Request, Response, NextFunction } from "express"
import BadRequestError from "../errors/bad-request.error";

const orderProductSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().required(),
})

export const validateOrderProduct = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = orderProductSchema.validate(req.body)
  if (error) {
    const validationError = new BadRequestError(error.details[0].message);
    return next(validationError);
  }
  next()
}
