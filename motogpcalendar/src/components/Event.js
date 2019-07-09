import React from 'react';

class Event extends React.Component{

    render(){
        const { eventName, eventDate, circuitName, countryName } = this.props.event;

        return (
            <div className="item">
                <div className="content">
                    <a href="" className="header">{eventName}</a>
                    <div className="meta">
                        <span>{countryName}</span>
                    </div>
                    <div className="description">
                        <p>Circuit: {circuitName}</p>
                    </div>
                    <div className="extra">
                        Date: {eventDate}
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;