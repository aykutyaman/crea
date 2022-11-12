import { NextFunction, Request, Response } from 'express';
import { jwtVerify } from 'jose';

const secret = 'nosoup4u';

export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.CreaJWT;

  if (!token) return res.sendStatus(401);

  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return next();
  } catch (e) {
    return res.sendStatus(403);
  }
}
