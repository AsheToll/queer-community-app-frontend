import React from 'react'

const Category = props => {
    return (
        <div className = 'column is-2 category'>
        <div className="box" onClick = {() => props.filter(props.category.name)}>
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{props.category.name}</strong>
                        <br/>
                        Text about the category.
                        </p>
                    </div>
                </div>
            </article>
            </div>
        </div>
    )
}

export default Category