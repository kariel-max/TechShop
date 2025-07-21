import sequelize from './server/database/Sequelize/sequelize';
import { server } from './server/Server';
import mongoose from 'mongoose';

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
(async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL || 'mongodb://localhost:27017/ecommerce'
    );
  } catch (error) {
    throw new Error(
      `Error: ${error instanceof Error ? error.message : String(error)}`
    );
  }
})();
