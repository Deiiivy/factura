const { DataTypes } = require('sequelize')
const sequialize = require('../database/connection.js')

const Bill = sequialize.define('Bill', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  month_period: {
    type: DataTypes.STRING(10),
    allowNull: false
  },

  date_pay: {
    type: DataTypes.STRING(10),
    allowNull: false
  },

  pay: {
    type: DataTypes.STRING(7),
    allowNull: false
  },

  value: {
    type: DataTypes.STRING(40),
    allowNull: false
  },

  value: {
    type: DataTypes.STRING(40),
    allowNull: false
  }
})