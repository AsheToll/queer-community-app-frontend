import React from 'react'
import {connect} from 'react-redux'
import Navbar from './Navbar.js'
import moment from 'moment'
// import Map from './Map.js'

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
                            {this.props.event ? moment(this.props.event.date).format('MMMM Do YYYY') : null}
                            {this.props.event ? moment(this.props.event.time).format('LT') : null}
                            Location (map)
                            {this.props.event ? this.props.event.address : null}
                            {/* <Map /> */}
                            <br />
                            Other people going:
                            {this.props.event ? this.props.event.attendees.map(attendee => <p>{attendee.name}</p>) : null}
                        </div>
                    </div>
                    <button className = 'button is-danger' onClick = {() => {this.deleteEvent(this.props.event.id)}}>Delete Event</button>
                    <hr/>
                </div>
                {/* <section className = 'hero is-large event-details-more-events'>
                    <div className = 'hero-body'>
                        <h1 className = 'title'>Similar Events You May Be Interested In</h1>
                    </div>
                </section> */}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    debugger
    const eventId = parseInt(ownProps.match.params.eventId)
    return {
        event: state.events ? state.events.find(event => event.id === eventId) : null
    }
}

export default connect(mapStateToProps)(EventDetails)