import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`;

export default function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return 'Loading...';
    if (error) return `Error! ${ error.message }`;

    return (
        <div className='flex flex-wrap  bg-red-200'>
            <p className='text-3xl w-full bg-red-300'>Book List</p>
                <ul>
                    { data.books.map(book => (
                        <li className="hover:bg-red-400">
                            <p>{ book.name }</p>
                        </li>
                    ))}
                </ul>
        </div>
    )
}