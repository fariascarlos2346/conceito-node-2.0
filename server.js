import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(user)
})

app.put('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        date: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(200).json(user)
})

app.delete('/usuarios', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuário deletado com sucesso!' })
})

app.listen(3000)
// req - requisição
// res - resposta
// http://localhost:3000

/* 
    Ok -  CRIAR
    OK - LER
       - DELETAR
       - EDITAR

         CRUD
         CREATE
         READ
         UPDATE
         DELETE
*/

/*
nome de usuario e senha mogoDB
    carlos
    D2AntMY6CSEXqbKB
*/
