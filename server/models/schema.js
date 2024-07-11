const mongoose = require ("mongoose")
const { Schema, model } = mongoose;

const eventSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date
    },
    location: {
        type: String
    },
});
const Event = model('Event', eventSchema);
module.exports = Event;
