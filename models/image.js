const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Image = sequelize.define("image",{
    image_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    image_link:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    episode_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
  }
}, {
    timestamps: false
  })


async function sync(){
    await Image.sync({ alter: true});
    console.log("Image tapplosu eklendi"); 
  }
sync();
module.exports = Image;
