import React from 'react'
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'
// Modal
import Events from './Events.js'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/events')
        .then(resp => resp.json())
        .then(event => {
            this.setState({
                events: event
            })
        })
    }

    render() {
        return(
            <div>
                <Navbar />
                <Searchbar />
                {/* Modal */}
                <div className = 'events-container'>
                    <div className = 'row'>
                        <div className = 'column column-50 column-offset-25'>
                            <Events
                                events = {this.state.events}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home