const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER, // ID: integer, primary, auto-increments, can't be null
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER, // Links to product, integer
      references: {
        model: 'product', // Refers to 'product' table
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER, // Links to tag, integer
      references: {
        model: 'tag', // Refers to 'tag' table
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
