declare module "snowflake-id" {
  interface SnowflakeIDOptions {
    mid?: number; // machine ID (0 ~ 1023)
    offset?: number; // custom epoch time (milliseconds)
  }

  export default class SnowflakeID {
    constructor(options?: SnowflakeIDOptions);

    generate(): number; // Returns a Buffer
  }
}
