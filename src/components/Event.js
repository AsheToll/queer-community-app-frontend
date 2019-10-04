import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const Event = ({event}) => {
    console.log('Event', event)
    return(
        <div className = 'event-card column is-3'>
            <div className = 'event-card-content'>
            <div className = 'event-card-image'>
                <img src = {event.image} alt = 'Event'/>
            </div>
                <div className = 'column event-card-content-left'>
                    <span className = 'is-size-7 event-card-tags'>{event.categories ? event.categories.map(category => <p className = 'event-card-tags'>{category.name}</p>) : null}</span>
                    <h1 className = 'subtitle event-name'>{event ? event.name : null}</h1>
                    <p className = 'event-datetime'>{moment(event.date).format('MMMM Do YYYY')} at {moment(event.time).format('LT')}</p>
                    <strong><span className = 'is-size-7 event-location'>{event.location ? event.location.name : null}</span></strong>
                    <p className = 'is-size-7 event-card-description'>{event.description}</p>
                </div>
                <div className = 'columns'>
                    <div className = 'column'>
                        <Link to = {`/events/${event.id}`}>
                            <p><span className = 'is-size-7 event-card-details'>DETAILS</span></p>
                        </Link>
                    </div>
                    <div className = 'column'>
                        {/* <div className = 'column column-25 event-card-content-right'>
                        </div>   */}
                        {
                            event.attendees ? event.attendees.map(attendee => {
                                return <p className = 'is-size-7'>{attendee.name}</p>
                            }) : null
                        }
                    </div>
                </div>
                <hr className = 'events-hr'/>
            </div>
        </div>
    )
}

export default Event