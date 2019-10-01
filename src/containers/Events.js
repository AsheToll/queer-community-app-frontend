import React from 'react'
import {connect} from 'react-redux'
import Event from '../components/Event.js'

class Events extends React.Component {
    
    render() {
        console.log(this.props.events)
        return(
            <div className = 'columns is-multiline'>
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

const mapStateToProps = (state, ownPropz) => {
    return {
        events: state.events.filter(event => {
            return event.name.toLowerCase().includes(state.search.toLowerCase()) || event.categories.map(c => c.name).includes(ownPropz.filtered)
        })
    }
}

export default connect(mapStateToProps)(Events)