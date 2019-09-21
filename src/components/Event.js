import React from 'react'

const Event = ({event}) => {
    // debugger
    return(
        <div className = 'event-card'>
            <div className = 'row event-card-image'>
                <img src = {event.image} />
            </div>
            <div className = 'row event-card-content'>
                <div className = 'column column-75 event-card-content-left'>
                    <h3>{event.name}</h3>
                    <h5>{event.location.name}</h5>
                    <p>{event.description}</p>
                </div>
                <div className = 'column column-25 event-card-content-right'>
                    Who else is going:
                    <div className = 'event-card-user-icon'>
                        {event.attendees.map(attendee => <p>{attendee.name}</p>)}
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Event