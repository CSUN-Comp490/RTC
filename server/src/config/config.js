const Sequelize = require("sequelize");
const Op = Sequelize.Op

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'retica',
    user: process.env.DB_USER || 'retica',
    password: process.env.DB_PASS || 'retica',
    options: {
      host: process.env.HOST || 'localhost',
      dialect: process.env.DIALECT || 'sqlite',
      storage: './retica.sqlite',
      operatorsAliases: false
    }
  },
  //Signing the jwt token. Checks if token is valid
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}