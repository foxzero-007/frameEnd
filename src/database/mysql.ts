import { mysql_info } from "../config/database";
import { DataSource, Connection, DataSourceOptions } from "typeorm";

let dataSource: DataSource | null = null;

export const getDataSource = async () => {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }
  if (!dataSource) {
    dataSource = new DataSource(mysql_info);
  }
  await dataSource.initialize();
  return dataSource;
};
