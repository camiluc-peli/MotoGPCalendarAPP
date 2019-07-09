import React from 'react';
import Faker from 'faker';
import List from './EventsList';
import Event from './Event';
import Spinner from './Spinner';
import motogpcalendar from '../api/motogpcalendar';

class App extends React.Component
{
    state = { events: [], loading: false };

    getEvents = async () => {
        this.setState({ loading: true });

        const response = await motogpcalendar.get(
            '/api/events'
        );
        
        this.setState({ events: response.data });
        this.setState({ loading: false });
    }

    renderContent(){
        if(this.state.events < 1 && !this.state.loading){
            return (
                <div>
                    <button className="massive ui button" onClick={this.getEvents}>Show me the Events!</button>
                </div>
            );       
        }

        if(this.state.events.length < 1 && this.state.loading){
            return (
                <div>
                    <Spinner message="Loading the events"/>
                </div>
            );       
        }
        
        return (
            <div>
                <div>{this.state.events}</div>
            </div>
        );
    }
    
    render(){
        
        return (
            <div>
                <h1>MotoGP Calendar</h1>
                <div>{this.renderContent()}</div>
            </div>
        );
    }
};

export default App;