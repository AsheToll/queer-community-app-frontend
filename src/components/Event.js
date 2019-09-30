import React from 'react'
import {Link} from 'react-router-dom'

const Event = ({event}) => {
    return(
        <div className = 'event-card column is-3'>
        <Link to = {`/events/${event.id}`}>
            <div className = 'event-card-image'>
                <img src = {event.image} alt = 'Event'/>
            </div>
            <div className = 'event-card-content'>
                <div className = 'column column-75 event-card-content-left'>
                    <strong><h3>{event.name}</h3></strong>
                    Description: <p>{event.description}</p>
                </div>
                <div className = 'column column-25 event-card-content-right'>
                    Who else is going:
                    {/* <div className = 'event-card-user-icon'>
                        {event.attendees.map(attendee => <p>{attendee.name}</p>)}
                    </div> */}
                </div>  
            </div>
        </Link>
        </div>
    )
}

export default Event