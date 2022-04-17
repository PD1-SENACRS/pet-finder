module.exports = {
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port : process.env.TYPEORM_PORT,
    username : process.env.TYPEORM_USERNAME,
    password : process.env.TYPEORM_PASSWORD,
    database : process.env.TYPEORM_DATABASE,
    synchronize : true,
    logging : true,
    entities : ["src/entity/**/*.ts"],
    subscribers : ["src/subscriber/**/*.ts"],
    migrations : ["src/migration/**/*.ts"]
};