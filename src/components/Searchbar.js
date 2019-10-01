import React from 'react'
import {connect} from 'react-redux'
import {searchInput} from '../redux/actions.js'

const Searchbar = props => {
    return(
            <div className="field is-grouped searchbar">
                <div className = 'control has-icons-right'>
                    <input
                        className = 'input'
                        type = 'text'
                        placeholder = 'Find an Event'
                        onChange = {event => props.onChange(event.target.value)}
                    />
                    <span className="icon is-small is-right">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        value: state.search
    }
}

export default connect(mapStateToProps, { onChange: searchInput })(Searchbar)