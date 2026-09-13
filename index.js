import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { connectDB } from './utils.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.listen(PORT, () => {
    console.log('Server is running on port number', + PORT);
})