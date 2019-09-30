import React from 'react'
import Category from '../components/Category.js'

const Categories = props => {
    debugger
    return (
        <div className = 'columns is-multiline'>
            {
                props.categories.map(category => {
                    return <Category key = {category.id} category = {category} filter = {props.filtered}/>
                })
            }
        </div>
    )
}

export default Categories