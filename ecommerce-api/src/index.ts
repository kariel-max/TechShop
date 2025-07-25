import sequelize from './server/database/Sequelize/sequelize';
import { server } from './server/Server';

const port = Number(process.env.PORT || 8080);

server.listen(port, '0.0.0.0');

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
  } catch (error) {
    throw new Error(
      `Error: ${error instanceof Error ? error.message : String(error)}`
    );
  }
})();