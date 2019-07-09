import React from 'react';
import Event from './Event';

const EventsList = (props) => {
    const events = props.events.map( event => {
        return <Event 
                    key={event.id}
                    eventName={event.eventName}
                    eventDate={event.eventDate}
                    circuitName={event.circuitName}
                    countryName={event.countryName}
                    />
    });

    console.log(events);

    return (
        <div>
            <h2>Events' List</h2>
            <div>{events}</div>
        </div>
    );
}

export default EventsList;