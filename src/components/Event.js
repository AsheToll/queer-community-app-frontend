import React from 'react'
import {Link} from 'react-router-dom'

const Event = ({event}) => {
    return(
        <div className = 'event-card column is-3'>
        <Link to = {`/events/${event.id}`}>
            <div className = 'event-card-content'>
            <div className = 'event-card-image'>
                <img src = {event.image} alt = 'Event'/>
            </div>
                <div className = 'column column-75 event-card-content-left'>
                    <span className = 'is-size-7 event-card-tags'>TAG</span>
                    Date and Time
                    <h1 className = 'subtitle'>{event.name}</h1>
                    Location
                    <p className = 'is-size-7 event-card-description'>{event.description}</p>
                </div>
                    <p><span className = 'is-size-7 event-card-details'>DETAILS</span></p>
                {/* <div className = 'column column-25 event-card-content-right'>
                </div>   */}
                Attendees
                <hr className = 'events-hr'/>
            </div>
        </Link>
        </div>
    )
}

export default Event