import dotenv from 'dotenv';
dotenv.config();

export const env = {
    port: Number(process.env.PORT) || 3500,
    pg_host: process.env.PG_HOST,
    pg_db: process.env.PG_DB,
    pg_user: process.env.PG_USER,
    pg_password: process.env.PG_PASSWORD,
    pg_port: process.env.PG_PORT,
    jwt_secret: process.env.JWT_SECRET,
}