import React from 'react'
class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
    fetch('http://localhost:4000/locations')
    .then(resp => resp.json())
    .then(locations => {
        this.setState({
            locations: locations
        })
    })
}

    render() {
        let formFields = {}

        return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Create a New Event</p>
                    <button className="delete" aria-label="close"></button>
                </header>
                <form className="modal-card-body">

                    <div className="field">
                        <label className="label">Event Name</label>
                        <div className="control">
                            <input ref = {input => formFields.name = input} className="input event-name" type="text" placeholder="Event Name" />
                        </div>
                    </div>

                    <div className="field">
                    <label className="label">Event Image</label>
                    <div className="control">
                        <input ref = {input => formFields.image = input} className="input event-image" type="text" placeholder="Event Image"/>
                    </div>
                    </div>

                    <div className="field">
                    <label className="label">location</label>
                    <div className="control">
                        <div className="select">
                        <select>
                            { this.state.locations ? this.state.locations.map(location => <option ref = {input => formFields.location = input} value = {location.id}>{location.name}</option>)
                            : null }
                        </select>
                        </div>
                    </div>
                    </div>

                    <div className="field">
                    <label className="label">Event Description</label>
                    <div className="control">
                        <textarea ref = {input => formFields.description = input} className="textarea event-description" placeholder="Event Description"></textarea>
                    </div>
                    </div>

                </form>
                <footer className="modal-card-foot">
                <button className="button is-success" onClick = {() => {this.props.handleFormSubmit(formFields.name.value, formFields.image.value,parseInt(formFields.location.value), formFields.description.value)}}>Create Event</button>
                <button className="button" onClick = {() => {this.props.closeModal()}}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}
}

export default Modal