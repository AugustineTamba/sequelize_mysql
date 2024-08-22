
module.exports = (sequelize, DataTypes) => {
    
    const Review = sequelize.define('Review', {
        
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        }
    });
    
    return Review;
};

//const productModel = require("./productModel");

// module.exports = (sequelize, DataTypes) => {
//     const Review = sequelize.define('Review', {
//       rating: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       description: {
//         type: DataTypes.TEXT
//       },
//       productId: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'Product',
//           key: 'id'
//         }
//       }
//     });
  
//     Review.belongsTo(productModel, { foreignKey: 'productId' });
  
//     return Review;
//   };