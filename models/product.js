//const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const pro = sequelize.define("userlist", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.NUMERIC(10),
      allowNull: true,
      unique: true,
    },
  });
  return pro;
};
