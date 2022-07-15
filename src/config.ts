import * as dotenv from 'dotenv';

dotenv.config();

interface mongoDB {
  uri: string
}

interface envConfig {
  port: string;
  env: string;
  mongodb: mongoDB
}

const config:envConfig = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || "3000",
  mongodb: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/autos'
  }
}

export default config;