const http = require('http')

const Router = require('router')
const ecstatic = require('ecstatic')

const j5 = require('johnny-five')
const Raspi = require('raspi-io')

const router = Router()
const server = http.createServer((req, res) => {
  router(req, res, (req, res) => {})
})

router.use(ecstatic({
  root: __dirname + '/public',
  handleError: false
}))

router.get('/hi', (req, res) => {
  res.statusCode = 200
  res.end('hi!')
})

server.listen(8080)
