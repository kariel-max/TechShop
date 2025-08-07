import { app } from './app';
import { env } from './config/env';
import { connectDatabase } from './database';

async function bootstrap() {
  await connectDatabase()

  app.listen(env.port, '0.0.0.0', ()=> {
  console.log(`Servidor rodando na porta ${env.port}` );
  });
}
bootstrap();