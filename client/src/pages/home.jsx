import React, {useEffect, useState}  from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";



function Home() {
    const [events, setEvents] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:5000/events")
    .then(res => {
        setEvents(res.data.events)
    })
    .catch(error => {
        console.log('Error fetching events:', error);
    });
}, []);

    return (
        <div>
            <h1>List of Events</h1>
                <Link to='/events/create'>
                <MdOutlineCreateNewFolder />
                </Link>
                 <table className="table ">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>description</th>
                            <th>date</th>
                            <th>location</th>
                            <th>details</th>
                            <th>update</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index)=>{
                            return (
                            <tr key={event._id}>
                                <td>{index + 1}</td>
                                <td>{event.title}</td>
                                <td>{event.description}</td>
                                <td>{event.date}</td>
                                <td>{event.location}</td>
                                <td>
                                    <Link to={`/events/details/${event._id}`}>
                                        <TbListDetails/>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/events/edit/${event._id}`}>
                                        <FaEdit/>
                                    </Link>
                                </td> 
                                <td>
                                    <Link to={`/events/delete/${event._id}`}>
                                        <MdDelete/>
                                    </Link>
                                </td>
                            </tr>
                        )})}
                    </tbody>
                    
                </table> 
        </div>
    )
}


export default Home;




{/* <table className="table ">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>description</th>
                            <th>date</th>
                            <th>location</th>
                            <th>details</th>
                            <th>update</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event)=>{
                            <tr key={event._id}>
                                <td>{event._id}</td>
                                <td>{event.title}</td>
                                <td>{event.description}</td>
                                <td>{event.date}</td>
                                <td>{event.location}</td>
                                <td>
                                    <Link to={`/events/details/${event._id}`}>
                                        <TbListDetails/>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/events/edit/${event._id}`}>
                                        <FaEdit/>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/events/delete/${event._id}`}>
                                        <MdDelete/>
                                    </Link>
                                </td>
                            </tr>
                        })}
                    </tbody>
                    
                </table> */}