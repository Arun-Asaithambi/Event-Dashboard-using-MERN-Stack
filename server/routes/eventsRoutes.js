const express = require ('express');
const router = express.Router();
const mongoose = require ('mongoose');
const Event = require('../models/schema');

// get all events
router.get('/', async (req, res)=>{
    try{
        const events = await Event.find({})
        res.status(200).json({count: events.length, data: events})
    } catch(e) {
        res.status(500).json({error: e.message})
    }
});

//get single event
router.get('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const event = await Event.findById(id);
        res.status(200).json(event)
        if(!event){
            return res.status(404).json({message: 'No event found'})
        }
    } catch(e) {
        res.status(500).json({error: e.message})
    }
});

//create a event
router.post('/', async (req, res) => {
    try {
        // const newEvent = {
        //     title: req.body.title,
        //     description: req.body.description,
        //     date: req.body.date,
        //     location: req.body.location
        // };
        const {title, description, date, location} = req.body ;
        const event = await Event.create({title, description, date, location});
        return res.status(200).json(event);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//update a event
router.put('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const { title, description, date, location } = req.body;
        const event = await Event.findByIdAndUpdate(id,
            { title, description, date, location},
            { new: true });
            await event.save();
        res.status(200).json(event);
        if(!event){
            return res.status(404).json({message: 'No event found'})
        }
    } catch(e){
        res.status(450).json({error: e.message})
    }
});

//delete a event
router.delete('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const { title, description, date, location } = req.body;
        const event = await Event.findByIdAndDelete(id,{ title, description, date, location });
        return res.status(200).json(event)
    }catch (e){
        return res.ststus(500).json({error: e.message})
    }
})

module.exports = router;