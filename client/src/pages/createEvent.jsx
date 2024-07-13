import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate  } from "react-router-dom";


export default function CreateEvent() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const createEvent = () =>{
        const data = {
            title,
            description,
            date,
            location
        };
        axios.post('http://localhost:5000/events', data)
        .then(()=> {
            navigate('/')
        })
        .catch(error => {
            console.log('Error fetching events:', error);
        });

    }
    
    return (
        <>
        <h1>createEvent</h1>
        <div>
            <label htmlFor="title">Title : </label>
            <input 
            name="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title" />
        </div>
        <div>
            <label htmlFor="description">Description : </label>
            <input 
            name="description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description" />
        </div>
        <div>
            <label htmlFor="date">Date : </label>
            <input 
            name="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            id="date" />
        </div>
        <div>
            <label htmlFor="location">Location : </label>
            <input 
            name="location" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location" />
        </div>
        <button onClick={createEvent}>save</button> <br />  
        <Link to='/'>back</Link>
        </>
    )
}
