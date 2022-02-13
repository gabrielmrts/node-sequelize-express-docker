module.exports = {
    HOST: "db",
    USER: "dev",
    PASSWORD: "dev",
    DB: "dev",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};