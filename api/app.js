const express = require('express');
const cors = require('cors');
const connectDb = require('./db');
const Sport  = require('./sport');
const app = express()

app.use(cors());
app.use(express.json());
connectDb();

app.get('/sport', async (req, res) => {
    try {
        const sport = await Sport.find();
        res.json(sport)
    }
    catch(error) {
        res.status(500).send(error.message);
    }
})

app.get('/sport/:id', async (req, res) => {
    try {
        const id = req.params.id
        const sportman = await Sport.findById(id);
        res.json(sportman)
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.post('/sport', async (req, res) => {
    try {
        const {sportman, sport} = req.body;
        if (!sportman || !sport) {
            res.status(400)
            res.json('okkkkkkk')
            return
        }
        const product = new Sport({sportman, sport});
        await product.save();
        res.json({success: true})
        console.log('Data added successfully...')
    }
    catch(error) {
        res.status(500).send(error.message)
    }
})

app.delete('/sport/:id', async (req, res) => {
    try {
        const id = req.params.id
        await Sport.deleteOne({ _id: id})
        res.status(200).json("Player detail deleted!")
        console.log('Data deleted successfully...')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.put('/sport/edit/:id', async (req,res) => {
    try {
        const id = req.params.id
        const newValue = {
            sportman: req.body.sportman,
            sport: req.body.sport
        }
        const dat = await Sport.updateOne({_id: id}, newValue)
        res.status(200).json(dat);
        console.log('Data updated successfully...');
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.listen(4000, () => {
    console.log('Server is listening on port 4000');
})