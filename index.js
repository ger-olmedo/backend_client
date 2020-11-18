const express = require('express');
const exphbs  = require('express-handlebars');

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.listen(2000)
app.use( express.static('public') )

app.get('/:seccion?', (req, res) => {
    const { seccion } = req.params

    const vista = seccion || 'home'

    const titulo = seccion.charAt(0).toUpperCase() + seccion.slice(1)

    res.render( seccion, { titulo } )
})
