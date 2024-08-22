module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: '',
    DB: "sequelize_mysql",
    dialect: 'mysql',
    operatorsAliases: false,  // Set this to false or remove it completely if using Sequelize v5 or later

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    
};