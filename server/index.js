import { Express } from 'express'

const app = Express()

app.get('/pegar', function(req, res){

    res.send('enviar mensagem')
})

app.get('/pegaoutracoisa', function (req, res){
    res.send('esta é outra mensagem')
})
server.listen(8000)