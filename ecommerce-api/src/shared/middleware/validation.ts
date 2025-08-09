import type { RequestHandler } from 'express';
import type { ZodObject, ZodRawShape, ZodError } from 'zod';

type TProperty = 'body' | 'header' | 'params' | 'query';

type TGetSchema = <T extends ZodRawShape>(schema: ZodObject<T>) => ZodObject<T>;

type TAllSchemas = Record<TProperty, ZodObject<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation = (getAllSchemas) => (req, res, next) => {
  const schemas = getAllSchemas((schema) => schema);

  const errorsResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    const result = schema.safeParse(req[key as TProperty]);

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((error) => {
        if (!error.path.length) return;
        const path = error.path.join('.');
        errors[path] = error.message;
      });

      errorsResult[key] = errors;
    }
  });

  if (Object.keys(errorsResult).length === 0) {
    next();
  } else {
    res.status(400).json({ errors: errorsResult });
  }
};
