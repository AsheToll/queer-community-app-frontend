import React from 'react'
import {connect} from 'react-redux'
import {searchInput} from '../redux/actions.js'

const Searchbar = props => {
    return(
            <div className="field is-grouped searchbar">
                <input
                    className = 'input'
                    type = 'text'
                    placeholder = 'Find an Event'
                    onChange = {event => props.onChange(event.target.value)}
                />
                <a className="button is-info">
                Search
                </a>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        value: state.search
    }
}

export default connect(mapStateToProps, { onChange: searchInput })(Searchbar)