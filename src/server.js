//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) //tudo que é ".use" é configuação do servidor
//rotas de arplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses) //poderia usar também igual do get
//start do servidor
.listen(5500) //porta do servidor