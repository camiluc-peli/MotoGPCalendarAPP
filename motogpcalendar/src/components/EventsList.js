import React from 'react';
import Event from './Event';

const EventsList = (props) => {

    return (
        <div>
            <h1>Events' List</h1>
            <div>{props.events}</div>
        </div>
    );
}

export default EventsList;