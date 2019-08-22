import React from 'react'
import { useGraphQL } from 'graphql-react'

import BookCard from './BookCard'
import Errors from './Errors'

const getBooksQuery = `
    {
        books{
            id
            name
            author {
                name
            }
        }
    }
`;

const urlGraphql = options => (
    options.url = 'http://localhost:4000/graphql'
)

export default function BookList() {
    const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
        fetchOptionsOverride: urlGraphql,
        operation: {
            query: getBooksQuery
        }
    });

    return (
        data  ? (
            <div className="w-4/6">
                <ul className="w-full h-full flex flex-wrap justify-center">
                    { data.books.map(book => (
                        <BookCard name={ book.name } author={ book.author.name }  key={ book.id } />
                    ))}
                </ul>
            </div>
        )
        : loading ? (
            <p>Loading...</p>
        )
        : (
            <Errors { ...errors }/>
        )
    )
}