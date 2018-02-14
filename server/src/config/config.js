/*mongodb username and password will go here for privacy*/
module.exports = {
  db: process.env.DB_NAME || '@ds221258.mlab.com:21258/retica',
  user: process.env.DB_USER || 'retica',
  pw: process.env.DB_PASS || 'Retica69!',
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
