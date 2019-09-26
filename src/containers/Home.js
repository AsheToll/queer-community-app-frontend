import React from 'react'
import Navbar from '../components/Navbar.js'
import Modal from '../components/Modal.js'
import Events from './Events.js'
import {connect} from 'react-redux'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            active: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.createEvent = this.createEvent.bind(this)
    }

    toggleModal() {
        let modal = document.querySelector('.modal')
        modal.classList.add('is-active')
    }

    closeModal() {
        let modal = document.querySelector('.modal')
        modal.classList.remove('is-active')
    }

    createEvent(event) {
        return this.state.events ? 
        this.setState({
            events: this.state.events.concat(event)
        }) : null
    }

    handleFormSubmit(name, image, location, description) {
        debugger
        let event = {name: name, image: image, location_id: location, description: description}
        fetch('http://localhost:4000/events', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({event})
            })
            .then(response => response.json())
            .then(event => {
                this.createEvent(event)
                window.location = `/events/${event.id}`
            })
        }


    render() {
        return(
            <div>
                <Navbar />
                <section className = 'hero is-info is-large'>
                    <div className = 'hero-body'>
                        <div className = 'container create-event-modal-container'>
                            <button className = 'button create-event-button' onClick = {() => {this.toggleModal()}}>
                                Create a New Event
                                {
                                    <Modal 
                                        handleFormSubmit = {this.handleFormSubmit}
                                        event = {this.state.event}
                                        onSave = {this.saveEvent}
                                        onChange = {this.updateEventState}
                                        closeModal = {this.closeModal}
                                    /> 
                                }
                            </button>
                        </div>
                    </div>
                </section>
                <section className="hero is-info is-medium">
                    <div className="hero-body filter-hero-body">
                        <h1 className = 'title'>Filter Events by Category</h1>
                        <div className="container filter-container">
                            <div className = "columns is-multiline">
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>

                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div className = 'column is-2 category'>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>Category One</strong>
                                            <br/>
                                            Text about the category.
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            </div>
                                        </nav>
                                        </div>
                                    </article>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <div className = 'container events-container'>
                    <div className = 'columns'>
                        <div className = 'column is-three-fifths'>
                            <Events/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps)(Home)