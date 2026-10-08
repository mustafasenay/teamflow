import type { RequestHandler } from "express";
import type { ZodType } from "zod";
import { AppError } from "../errors/app-error.js";

export const validate = (schema: ZodType) : RequestHandler => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return next(
        new AppError(
          400,
          "VALIDATION_ERROR",
          "Invalid request data",
          result.error.flatten().fieldErrors
        )
      );
    }
    res.locals.validatedBody = result.data;

    next();
  };
};
