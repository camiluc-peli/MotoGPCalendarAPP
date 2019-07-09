import React from 'react';

class Event extends React.Component{

    render(){
        const { key, eventName, eventDate, circuitName, countryName } = this.props;

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