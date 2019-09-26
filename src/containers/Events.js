import React from 'react'
import {connect} from 'react-redux'
import Event from '../components/Event.js'

class Events extends React.Component {
    
    render() {
        return(
            <div>
                {
                    this.props.events ?
                    this.props.events.map(event => {
                        return <Event key = {event.id} event = {event} />
                    })
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events.filter(event => event.name.toLowerCase().includes(state.search.toLowerCase()))
    }
}

export default connect(mapStateToProps)(Events)