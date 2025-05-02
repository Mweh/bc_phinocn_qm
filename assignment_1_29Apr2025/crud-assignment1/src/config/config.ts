// config/config.ts
export const config = {
    jwtSecret: process.env.JWT_SECRET || "yourSuperSecret", 
    jwtExpiration: "1d", // 1 day
  };
  