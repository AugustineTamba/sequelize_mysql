module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product', {

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.DECIMAL
        },
        published: {
            type: DataTypes.BOOLEAN
        },
        
    });

    return Product;
};