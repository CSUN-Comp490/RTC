module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'retica',
    user: process.env.DB_USER || 'retica',
    password: process.env.DB_PASS || 'retica',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './retica.sqlite'
    }
  },
  //Signing the jwt token. Checks if token is valid
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}