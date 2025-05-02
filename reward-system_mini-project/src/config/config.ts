import { Dialect } from 'sequelize';

interface DBConfig {
  username: string;
  password: string | null;
  database: string;
  host: string;
  dialect: Dialect;
}

const config: { [key: string]: DBConfig } = {
  development: {
    username: 'reward_system',
    password: null,
    database: 'reward_system',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};

export = config;
