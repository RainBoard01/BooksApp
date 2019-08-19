import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import bg from './media/bg.jpg'

import BookList from './components/BookList'
import NavBar from './components/NavBar'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={ client }>
      <div className="w-screen h-screen bg-fixed bg-cover bg-center text-white flex flex-col" style={{ backgroundImage: `url(${ bg })` }}>
        <NavBar/>
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;