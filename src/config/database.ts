import { DataSourceOptions } from "typeorm";
import { Questions } from "../entities";

const mysql_info: DataSourceOptions = {
  type: "mysql",
  host: "120.26.237.17",
  port: 3306,
  username: "root",
  password: "Chq@2549603631",
  database: "frame_data",
  synchronize: true,
  logging: true,
  entities: [Questions],
  subscribers: [],
  migrations: [],
};

export { mysql_info };
