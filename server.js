const express = require('express')
const app = express()
const port = 3000

const data = [
  { id: 1, name: 'Basketball ball', available: true, price: 19.90, image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60', description_short: 'A Basketball ball.', description_long: 'Orange basketball for every basketball player. Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui.' },
  { id: 2, name: 'Volleyball ball', available: false, price: 17.90, image: 'https://images.pexels.com/photos/2471259/pexels-photo-2471259.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', description_short: 'Handy volleyball ball.', description_long: 'Volleyball perfect for beach tournaments or just for fun.' },
  { id: 3, name: 'Football ball', available: true, price: 15.55, image: 'https://images.pexels.com/photos/51971/football-the-ball-sport-game-51971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description_short: 'Perfect foot ball.', description_long: 'Football ball perfect for your foot. Phasellus fermentum in, dolor. Pellentesque facilisis. ' },
  { id: 4, name: 'Tennis ball', available: true, price: 7.80, image: 'https://images.pexels.com/photos/226587/pexels-photo-226587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description_short: 'Fast tennis ball.', description_long: 'Fastest tennis ball on the market. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.' },
  { id: 5, name: 'Golf ball', available: true, price: 19.90, image: 'https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description_short: 'Just a golf ball.', description_long: 'A regular golf ball for beginner players. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.' },
  { id: 6, name: 'Football PRO ball', available: true, price: 39.99, image: 'https://images.pexels.com/photos/39362/the-ball-stadion-football-the-pitch-39362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=12600', description_short: 'Football ball for a PRO.', description_long: 'Football ball for a PRO players. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.' }
]

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  // to simulate server response delay
  setTimeout(() => {
    next()
  }, 1000)
})

app.get('/products', function (req, res) {
  res.send(data.map(obj => ({ id: obj.id, name: obj.name, image: obj.image, description_short: obj.description_short })))
})

app.get('/products/:productId', function (req, res) {
  if (req.params.productId && !isNaN(req.params.productId)) {
    // eslint-disable-next-line no-undef
    const item = data.find(obj => Number(obj.id) === Number(req.params.productId))
    if (item) {
      res.send(item)
    } else {
      res.status(404).send({ error: 'Not found' })
    }
  } else {
    res.status(400).send({ error: 'Bad request' })
  }
})

app.listen(port, () => console.log(`Shop dummy API server app listening on port ${port}!`))
