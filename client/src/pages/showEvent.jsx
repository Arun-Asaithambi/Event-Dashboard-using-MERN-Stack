import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Home from "./home"
export default function ShowEvent() {
    const [event, setEvent] = useState([]);
    const {id} = useParams();
    
    useEffect(() =>{
        axios.get(`http://localhost:5000/events/${id}`)
        .then(res =>{
            setEvent(res.data)
        })
        .catch(error => {
            console.log('Error fetching events:', error);
        });
    },[])

    return (
        <>
        <h1>showEvent</h1>
                <div>
                    <h2>Title - {event.title}</h2>
                    <h2>Start Date - {event.date}</h2>
                    <h2>End Date - {event.date}</h2>
                    <h2>Location - {event.location}</h2>
                    <h2>About - {event.description}</h2>
                </div>
        <Link to='/'> back </Link>
        </>
    )
}
