import {Request, Response, NextFunction } from 'express';
import { JWTService } from '../services';


export const ensureAuthenticated = async (req: Request, res: Response, next:NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      errors: { default: 'Não autenticado' }
    });
    return
  }

  const [type, token] = authorization.split(' ');

  if (type !== 'Bearer' || !token) {
    res.status(401).json({
      errors: { default: 'Não autenticado' }
    });
    return
  }

  const jwtData = JWTService.verify(token);
  if (jwtData === 'JWT_SECRET_NOT_FOUND') {
    res.status(500).json({
      errors: { default: 'Erro ao verificar o token' }
    });
    return
  } else if (jwtData === 'INVALID_TOKEN') {
    res.status(401).json({
      errors: { default: 'Não autenticado' }
    });
    return
  }
  req.headers.idUsuario = jwtData.uid.toString();
  next();
};
