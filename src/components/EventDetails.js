import React from 'react'
import {connect} from 'react-redux'
import Navbar from './Navbar.js'

class EventDetails extends React.Component {

    deleteEvent(event) {
        let id = this.props.event.id
        fetch('http://localhost:4000/events/' + `${id}`, {
            method: "DELETE"
        })
        .then(window.location = '/events')
    }

    render() {
        console.log('printing', this.props.event)
        return(
            <React.Fragment>
                <Navbar />
                <div className = 'event-details-container'>
                    <div className = 'columns'>
                        <div className = 'column is-two-thirds event-detail-image styling-box'>
                            <img src = {this.props.event ? this.props.event.image : null} />
                        </div>
                        <div className = 'column event-detail-map styling-box'>
                            <h1 className = 'title'>
                                {this.props.event ? this.props.event.name : null}
                            </h1>
                            <div>
                                <h3 className = 'subtitle event-detail-description'>
                                    {this.props.event ? this.props.event.description : null}
                                </h3>
                            </div>
                            Event Map
                            <br />
                            Other people going:
                            {this.props.event ? this.props.event.attendees.map(attendee => <p>{attendee.name}</p>) : null}
                        </div>
                    </div>
                    <div className = 'columns'>
                        <div className = 'column is-two-thirds event-detail-description styling-box'>
                    <button className = 'button is-danger' onClick = {() => {this.deleteEvent(this.props.event.id)}}>Delete Event</button>
                        </div>
                        <div className = 'column event-detail-attendees styling-box'>
                        </div>
                    </div>
                    <hr/>
                    Other Events in this Category
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const eventId = parseInt(ownProps.match.params.eventId)
    return {
        event: state.events ? state.events.find(event => event.id === eventId) : null
    }
}

export default connect(mapStateToProps)(EventDetails)