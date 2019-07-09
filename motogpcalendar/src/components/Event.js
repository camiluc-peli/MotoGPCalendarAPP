import React from 'react';

class Event extends React.Component{
    render(){
        const { date, name, circuit, country } = this.props;

        return (
            <div className="ui items">
                <div className="item">
                    <div className="content">
                        <a href="" className="header">{name}</a>
                        <div class="meta">
                            <span>
                                <p>{date}</p>
                                <p>{country}</p>
                            </span>
                        </div>
                        <div className="description">
                            <p>{circuit}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;