import React from 'react'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: [],
            name: '',
            image: '',
            location: '',
            description: '',
            categories: [],
            date: new Date(),
            time: '',
            address: {
                
            }
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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeDate = date => this.setState({date})
    onChangeTime = time => this.setState({time})

    handleOptions = (event) => {
        this.setState({
            [event.target.name]: Array.from(event.target.selectedOptions, option => option.value)
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
                    <button className="delete" aria-label="close" onClick = {() => this.props.closeModal()}></button>
                </header>
                <form className="modal-card-body" noValidate>

                    <div className="field">
                        <label className="label">Event Name</label>
                        <div className="control">
                            <input
                                className="input event-name modal-fields"
                                type="text"
                                placeholder="Event Name"
                                required
                                name = 'name'
                                onChange = {this.handleChange}
                                value = {this.state.name}
                            />
                        </div>
                    </div>

                    <div className="field">
                    <label className="label">Event Image</label>
                    <div className="control">
                        <input
                            className="input event-image modal-fields"
                            type="text"
                            placeholder="Event Image"
                            required
                            name = 'image'
                            onChange = {this.handleChange}
                            value = {this.state.image}
                        />
                    </div>
                    </div>

                    <div className="field">
                    <label className="label">When</label>
                        <DatePicker
                            name = 'date'
                            onChange = {this.onChangeDate}
                            value = {this.state.date}
                        />

                        <TimePicker
                            name = 'time'
                            onChange = {this.onChangeTime}
                            value = {this.state.time}
                        />
                    </div>

                    <div className="field">
                    <label className="label">Location</label>
                    <div className="control">
                        <div className="select">
                        <select className = 'modal-fields'
                            name = 'location'
                            onChange = {this.handleChange}
                        >
                            {
                                this.state.locations ? this.state.locations.map(location => {
                                return <option key = {location.id} value = {location.id}
                                    ref = {input => formFields.location = input}> {location.name} </option>
                                }) : null
                            }
                        </select>
                        </div>
                    </div>
                    </div>

                    <div className="field">
                    <label className="label">Event Description</label>
                    <div className="control">
                        <textarea
                            className="textarea event-description modal-fields"
                            placeholder="Event Description"
                            required
                            name = 'description'
                            onChange = {this.handleChange}
                            value = {this.state.description}
                        >
                        </textarea>
                    </div>
                    </div>

                    <div className="field">
                    <label className="label">Add Some Categories</label>
                    <div className="control">
                        <div className="select">
                        <select className = 'modal-fields' multiple
                            name = 'categories'
                            onChange = {this.handleOptions}
                            value = {this.state.categories}>
                            {
                                this.props.categories ? this.props.categories.map(category => {
                                return <option key = {category.id}> {category.name} </option>
                                }) : null
                            }
                        </select>
                        </div>
                    </div>
                    </div>

                </form>
                <footer className="modal-card-foot buttons">
                    <button className="button is-success" onClick = {() => this.props.handleFormSubmit(this.state.name, this.state.image, parseInt(formFields.location.value), this.state.description, this.state.categories, this.state.date, this.state.time)}>Create Event</button>
                    <button className="button modal-cancel-button" onClick = {() => this.props.closeModal()}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}
}

export default Modal