import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(403).json({
      message: "UnAuthorized Access: Header missing",
    });
    return;
  }

  try {
    const result: jwt.JwtPayload = jwt.verify(
      token,
      process.env.JWT_SECRET || "DEFAULTJWTSECRETWHENICANNOTFETCHJWTSECRET"
    ) as jwt.JwtPayload;

    if (result.role == "Admin") {
      req.userId = result.userId;
      next();
    } else {
      res.status(403).json({
        message: "User cannot access Admin Stuff",
      });
      return;
    }
  } catch (e) {
    res.status(403).json({
      message: "JWT verification failed",
    });
  }
};
