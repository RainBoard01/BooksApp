import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import BookCard from './BookCard'

const getBooksQuery = gql`
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

export default function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return 'Loading...';
    if (error) return `Error! ${ error.message }`;
    //console.log(data);

    return (
        <div className="w-4/6 mx-auto">
            <ul className="w-full h-full flex flex-wrap justify-center">
                { data.books.map(book => (
                    <BookCard name={ book.name } author={ book.author.name }  key={ book.id } />
                ))}
            </ul>
        </div>
    )
}