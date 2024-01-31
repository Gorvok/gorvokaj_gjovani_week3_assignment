// Load in our Express framework
const express       = require(`express`)

// Create a new Express instance called "app"
const app           = express()

// Parse incoming requests with JSON payloads
app.use(express.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'twig');

// Load in our RESTful routers
const planetRouter  = require(`./routers/planet.js`)
const starRouter    = require(`./routers/star.js`)
const galaxyRouter  = require(`./routers/galaxy.js`)

// Home page
app.get('/', (req, res) => {
  res.render('layouts/main', {
    name: "Gjovani"
  })
})

// Register our RESTful routers with our "app"
app.use(`/planets`,  planetRouter)
app.use(`/stars`,    starRouter)
app.use(`/galaxies`, galaxyRouter)

// Set our app to listen on port 3000
app.listen(3000)
