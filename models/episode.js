const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Episode = sequelize.define("episode",{
    episode_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    manga_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    episode_title:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    episode_name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    episode_like:{
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    episode_comment:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    episode_date:{
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        get: function(){
            return this.getDataValue("episode_date").
            toLocaleString("tr-TR",{timeZone: "UTC"});
        }
    }
}, 

{
    timestamps: false,
  })

async function sync(){

    await Episode.sync({ alter: true});
    console.log("Episode tapplosu eklendi");
  
  }
  
  sync();

module.exports = Episode;
