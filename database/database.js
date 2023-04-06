const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','viNI20198!',{
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

module.exports = connection;