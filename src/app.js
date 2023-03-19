import express from 'express';
import __dirname from './utils.js';
import emailRouter from './routes/email.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.send('Ok'))

app.use('/email', emailRouter)


app.listen(8080, () => console.log('Listening on 8080'))