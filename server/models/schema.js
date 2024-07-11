const mongoose = require ("mongoose")
const { Schema, model } = mongoose;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
});
const Event = model('Event', eventSchema);
module.exports = Event;
