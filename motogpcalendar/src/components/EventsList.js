import './EventsList.css';
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
        <div className="list">
            <div className="ui celled middle aligned selection list">
                {events}
            </div>
        </div>
    );
}

export default EventsList;