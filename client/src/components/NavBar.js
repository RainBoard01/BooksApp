import React, { Component } from 'react'

//selected = form.selected => form.selected == book-list ? 'Book' : 'Author';

export default class NavBar extends Component {
    render() {
        return (
            <div className="w-screen shadow-lg mb-2 py-2">
                <div className="w-4/6 mx-auto items-center flex justify-between">
                    <p className="text-3xl">List of Books</p>
                    <div className="navbar">
                        <label>
                            <input className="hidden" type="radio" value="book-list" name="nav"/>
                            <span className="text-xl">Books</span>
                        </label>
                        <label>
                            <input className="hidden" type="radio" value="author-list" name="nav"/>
                            <span className="text-xl">Authors</span>
                        </label>
                    </div>
                </div>
                
            </div>
        )
    }
}
