// we dont use it in mongoose part
// sequel is a orm for mysql

const Sequelize = require('sequelize');

const sequelize =require('../utility/database');

const OrderItem = sequelize.define('orderItem',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER,
    price :Sequelize.DOUBLE
});

module.exports = OrderItem;