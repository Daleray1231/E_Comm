const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER, // ID: integer, primary key, auto-increments, not null
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING, // Tag name: a string, null allowed
    },
  }, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'tag',
}
);

module.exports = Tag;
