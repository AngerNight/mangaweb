const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Category = sequelize.define("category",{
    category_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    category_title:{
        type: DataTypes.STRING,
        allowNull:false,
    }
}, {
    timestamps: false
  })

async function sync(){

    await Category.sync({ alter: true});
    console.log("Category tapplosu eklendi");
  
  }
  
  sync();

module.exports = Category;