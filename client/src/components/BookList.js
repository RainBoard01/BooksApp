import React, { Component } from 'react'

export default class BookList extends Component {
    render() {
        return (
            <div className='flex flex-wrap  bg-red-200'>
                <p className='text-3xl w-full bg-red-300'>Book List</p>
                <ul>
                    <li>Book name</li>
                </ul>
            </div>
        )
    }
}