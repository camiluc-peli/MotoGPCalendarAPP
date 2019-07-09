import React from 'react';
import Event from './Event';

const EventsList = (props) => {
    const events = props.events.map( event => {
        return <Event
                    key={event.id}
                    event={event}
                    />
    });

    return (
        <div>
            <h2>Events' List</h2>
            <div>{events}</div>
        </div>
    );
}

export default EventsList;