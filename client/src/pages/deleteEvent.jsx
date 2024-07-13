import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate, useParams  } from "react-router-dom";

export default function DeleteEvent() {
    const {id} = useParams();
    const navigate = useNavigate();


    const deleteEvent = () =>{
        
        axios.delete(`http://localhost:5000/events/${id}`)
        .then(() => {
            navigate('/')
        })
        .catch(error => {
            console.log('Error fetching events:', error);
        });
    }
    return (
        <>
         <h1>Delete Event</h1>
         <Link to='/'>no, Go Back</Link> <br />
        <button onClick={deleteEvent}>Yes, Delete it</button>

        </>
    )
}
