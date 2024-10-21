import Express  from 'express'

const app = Express()
app.use(Express.json())
app.get('/pegar', function(req, res){
    res.send('enviar mensagem')
})

app.get('/pegaoutracoisa', function (req, res){
    res.send('esta é outra mensagem')

    app.post('/registro', function(req, res)){
        try{
            const{nome,sobrenome,email,senha,dataNascimento} = req.body
            if(!nome || !sobrenome || !email || !senha || !dataNascimento){
                res.send('todos campos devem ser enviados')
            }
            console.log('criar user')
        }catch(erro){
            console.log(erro)
        }
    }
})
server.listen(8000)