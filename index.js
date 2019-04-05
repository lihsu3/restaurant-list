const express = require('express')
const exphbs  = require('express-handlebars');
const restaurantList = require('./restaurant.json')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/', (req, res) => {
	const a = restaurantList.results
	res.render('home', {rl: a})
})

app.get('/restaurants/:id', (req, res) => {
	res.render('show', {re: restaurantList.results[req.params.id - 1]})
})

app.listen(port, () => console.log(`listening on port ${port}`))
