import express from 'express'
import { prisma } from './lib/prisma.js'
const app = express()
const port = 3000

let produtos = ''

app.use(express.json())

//Method GET
app.get("/produtos", async (req, res) => {
    produtos = await prisma.user.findMany()
    res.status(200).send(produtos)
})

//Method POST
app.post("/produtos", async(req, res) => {
    await prisma.user.create({
        data:{
            produto:req.body.produto,
            categoria:req.body.categoria,
            preco:req.body.preco,
            fornecedor:req.body.fornecedor,
            link:req.body.link,
            img1:req.body.img1,
            img2:req.body.img2
        }
    })
    res.status(201).send("Dados cadastrados na API")
})
app.listen(port, () => {
    console.log(`Servidor rodando na port ${port}`)
})