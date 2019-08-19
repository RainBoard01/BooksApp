import React, { Component } from 'react'

export default class BookCard extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="flex flex-col opacity-25 bg-black rounded shadow-lg m-2">
                <div className="opacity-100 m-2">
                    <p className="text-lg font-semibold" >{ this.props.name }</p>
                    <p>{ this.props.author }</p>
                </div>
            </div>
        )
    }
}
