const PORT = 3000;
const express = require('express')
const app = express()

app.get('', (req, res) => {
     res.send('Hello express!')
})
app.get('/weather', (req, res) => { res.send('Your weather')
})

app.get('/hackeru', (req, res) => { res.send('Hacker cost a lot!!!!!!!!')
})

app.get('/weather2', (req, res) => {
    // Provide an object to send as JSON
     res.send({
            forecast: 'It is snowing',
            location: 'Philadelphia' })
            })

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`)
    })

