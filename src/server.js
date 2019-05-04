const express = require('express')
const session = require('express-session')
const redis = require('redis')
const redisClient = redis.createClient()
const RedisStore = require('connect-redis')(session)
const nunjucks = require('nunjucks')
const path = require('path')
const flash = require('connect-flash')
const dateFilter = require('nunjucks-date-filter')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(flash())
    this.express.use(
      session({
        name: 'root',
        store: new RedisStore({
          host: '127.0.0.1',
          port: 6379,
          client: redisClient
        }),
        secret: 'TempSecretString',
        resave: false,
        saveUninitialized: false
      })
    )
  }

  views () {
    const env = nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    env.addFilter('date', dateFilter)

    this.express.set('view engine', 'njk')
  }

  routes () {
    this.express.use(express.static(path.resolve(__dirname, 'public')))
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
