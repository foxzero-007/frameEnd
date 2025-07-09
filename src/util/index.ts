import SnowflakeID from "snowflake-id";
const SnowIdGenerator = new SnowflakeID({
  mid: 42,
  offset: (2019 - 1970) * 31536000 * 1000,
});

export const getNewUuid = () => {
  return SnowIdGenerator.generate();
};
