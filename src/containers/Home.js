import React from 'react'
import Navbar from '../components/Navbar.js'
import Modal from '../components/Modal.js'
import Events from './Events.js'
import Categories from './Categories.js'
import {connect} from 'react-redux'
import {authHeader} from '../_helpers/auth-header.js'
import Searchbar from '../components/Searchbar.js'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            active: false,
            filtered: ''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.createEvent = this.createEvent.bind(this)
    }

    toggleModal() {
        let modal = document.querySelector('.modal')
        modal.classList.add('is-active')
    }

    closeModal() {
        document.querySelector('.modal').classList.remove('is-active')
    }

    createEvent(event) {
        debugger
        return this.state.events ? 
        this.setState({
            events: this.state.events.concat(event)
        }) : null
    }

    handleFormSubmit(name, image, location, description, category, date, time) {
        debugger
        let event = {
                "name": name,
                "image": image,
                "location_id": location,
                "description": description,
                "categories": category,
                "date": date,
                "time": time

        }
        debugger
        fetch('http://localhost:4000/events', {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({event})
            })
            .then(response => response.json())
            .then(event => {
                debugger
                this.createEvent(event)
                window.location = `/events/${event.id}`
            })
        }

        filterOnClick = (event) => {
            debugger
            console.log(event)
            this.setState({
                filtered: event
            })
        }


    logout = () => {
        localStorage.clear()
        window.location = '/login'
    }

    render() {
        return(
            <div>
                <Navbar
                    logout = {this.logout}
                />
                <section className = 'hero is-info is-large'>
                    <div className = 'hero-body'>
                        <h1 className = 'title create-event-title'>Start Building Community</h1>
                        <div className = 'container create-event-modal-container'>
                            <button className = 'button create-event-button' onClick = {() => {this.toggleModal()}}>
                                Create an Event
                                {
                                    <Modal 
                                        handleFormSubmit = {this.handleFormSubmit}
                                        event = {this.state.event}
                                        onSave = {this.saveEvent}
                                        onChange = {this.updateEventState}
                                        closeModal = {this.closeModal}
                                        categories = {this.props.categories}
                                    /> 
                                }
                            </button>
                        </div>
                    </div>
                </section>
                {/* <section className="hero is-small">
                    <div className="hero-body filter-hero-body">
                        <h1 className = 'title filter-events-title'>Filter Events by Category</h1>
                        <div className="container filter-container">
                            <Categories
                                categories = {this.props.categories}
                                filtered = {this.filterOnClick}
                            />
                        </div>
                    </div>
                </section> */}
                <div className = 'container searchbar-container'>
                    <Searchbar />
                </div>
                <h1 className = 'title events-title'>Events</h1>
                <div className = 'container events-container'>
                    <Events
                        filtered = {this.state.filtered}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.events,
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Home)