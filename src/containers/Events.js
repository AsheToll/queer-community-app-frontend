import React from 'react'
import {Link} from 'react-router-dom'
import Event from '../components/Event.js'

const Events = (props) => {
    return(
        <div>
            {
                props.events ?
                    props.events.map(event => {
                        return <Link to = {`/events/${event.id}`}><Event key = {event.id} event = {event} /></Link>
                    })
                 : null
            }
        </div>
    )
}

export default Events