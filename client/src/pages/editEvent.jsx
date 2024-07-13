import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function EditEvent() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [event, setEvent] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() =>{
        axios.get(`http://localhost:5000/events/${id}`)
        .then(res =>{
            // setEvent(res.data)
            setTitle(res.data.title);
            setDescription(res.data.description);
            setDate(res.data.date);
            setLocation(res.data.location)
        })
        .catch(error => {
            console.log('Error fetching events:', error);
        });
    },[])

    // const [title, setTitle] = useState(event.title);
    // const [description, setDescription] = useState(event.description);
    // const [date, setDate] = useState( event.date );
    // const [location, setLocation] = useState(event.location);

    const editEvent = () =>{
        const data = {
            title,
            description,
            date,
            location
        };
        axios.put(`http://localhost:5000/events/${id}`,data)
        .then(()=> {
            navigate('/')
        })
        .catch(error => {
            console.log('Error fetching events:', error);
        });
    }

    return (
        <>
        <h1>editEvent</h1>
        <div>
            <label htmlFor="title">Title :  </label>
            <input 
            name="title" 
            // defaultValue={event.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title" />
        </div>
        <div>
            <label htmlFor="description">Description : </label>
            <input 
            name="description" 
            // defaultValue={event.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description" />
        </div>
        <div>
            <label htmlFor="date">Date : </label>
            <input 
            name="date" 
            // defaultValue={event.date}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            id="date" />
        </div>
        <div>
            <label htmlFor="location">Location : </label>
            <input 
            name="location" 
            // defaultValue={event.location}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location" />
        </div>
            <button onClick={editEvent}>submit</button>
            <Link to='/'>back</Link>
        </>
    )
}
