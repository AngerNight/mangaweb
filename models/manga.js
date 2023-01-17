const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Manga = sequelize.define("manga",{
    manga_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      manga_title: {
        type : DataTypes.STRING,
        allowNull:false,
      },
      manga_url: {
        type : DataTypes.STRING,
        allowNull:false,
      },
      manga_category:{
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      manga_image:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      manga_author:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      manga_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      manga_view:{
        type: DataTypes.INTEGER,
        allowNull:true,
      },
      manga_like:{
        type: DataTypes.INTEGER,
        allowNull:true,
      },
      manga_complete:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
      }

}, {
  timestamps: true,
})

async function sync(){
  await Manga.sync({ alter: true});
  console.log("Manga tapplosu eklendi");
}
sync();
module.exports = Manga;
