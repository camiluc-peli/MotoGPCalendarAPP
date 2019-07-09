import React from 'react';

class Event extends React.Component{

    render(){
        const { eventName, eventDate, circuitName, countryName } = this.props.event;

        return (
            <div>
                <h4>{eventName}</h4>
                <div>
                    Circuit: {circuitName} - {countryName}
                    <br/>
                    Date: {eventDate}
                </div>
                
            </div>
        );
    }
}

export default Event;