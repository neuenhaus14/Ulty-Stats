import { Dialect } from 'sequelize';

interface DbConfig {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DB: string;
  dialect: Dialect;
  pool: {
    max: number;
    min: number;
    acquire: number;
    idle: number;
  };
}
 
 
 const dbConfig: DbConfig  = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "UltyStats",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export {dbConfig}