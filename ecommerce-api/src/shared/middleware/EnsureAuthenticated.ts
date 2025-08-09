import { JWTService } from "../services";
import { Request, Response, NextFunction } from "express";

export const ensureAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const cookieHeader = req.headers.cookie;
  console.log("toke validation", cookieHeader);

  if (!cookieHeader) {
    res.status(401).json({ errors: { default: 'Não autenticado' } });
    return
  }

  // Converte a string de cookies em um objeto
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [key, value] = c.trim().split('=');
      return [key, value];
    })
  );

  // Aqui você escolhe qual cookie usar
  const token = cookies['Bearer'] || cookies['access_token'];

  if (!token) {
    res.status(401).json({ errors: { default: 'Token não encontrado' } });
    return
  }

  const jwtData = JWTService.verify(token);

  if (jwtData === 'JWT_SECRET_NOT_FOUND') {
    res.status(500).json({ errors: { default: 'Erro ao verificar o token' } });
    return
  } else if (jwtData === 'INVALID_TOKEN') {
    res.status(401).json({ errors: { default: 'Não autenticado' } });
    return
  }

  req.headers.idUsuario = jwtData.uid.toString();
  next();
};
