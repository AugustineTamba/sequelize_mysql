/**
 * Database configuration and initialization module.
 *
 * This module sets up a connection to the database using Sequelize and defines the database models.
 *
 * 
 */

const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

// Create a new Sequelize instance with the database configuration.
const sequelize = new Sequelize(   
    dbConfig.DB, 
    dbConfig.USER, 
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate().then(() => {
    console.log("Connected to the database");
}).catch(err => {
    console.log("Error: " + err);
})

const db = {}

db.Sequelize = Sequelize; // constructor
db.sequelize = sequelize; // instance

db.products = require('./productModel')(sequelize, DataTypes)
db.reviews = require('./reviewModel')(sequelize, DataTypes)

// Resolves when the sync is complete.
db.sequelize.sync({ force: false }).then(() => {
    console.log("yes resynced done");
})

// 1 to many relations implementation between product and review

db.products.hasMany(db.reviews, {
    foreignKey: 'product_id',
    as: 'review'
})

db.reviews.belongsTo(db.products, {
    foreignKey: 'product_id',
    as: 'product'
})


module.exports = db
